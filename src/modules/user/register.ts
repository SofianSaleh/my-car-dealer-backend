import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hashPassword } from '../../services/hash';

import { RegisterInput } from './register/RegisterInput';
import { User } from '../../db/entity/User';

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    const users = await User.find();
    console.log(users);
    return users;
  }

  @Mutation(() => User)
  async register(
    @Arg('data')
    {
      firstName,
      lastName,
      username,
      email,
      password,
      dateOfBirth,
    }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    }).save();

    return user;
  }
}
