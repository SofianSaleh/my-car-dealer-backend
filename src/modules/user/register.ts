import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hashPassword } from '../../services/hash';

import { RegisterInput } from './register/RegisterInput';
import { User } from '../../db/entity/User';
import { UserReturn } from '../../types/returns';

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    const users = await User.find();
    console.log(users);
    return users;
  }
  @Mutation(() => UserReturn)
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
  ): Promise<UserReturn> {
    console.log(RegisterInput);
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    }).save();

    return { user };
  }
}
