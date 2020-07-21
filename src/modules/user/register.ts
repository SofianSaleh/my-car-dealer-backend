import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { hashPassword } from "../../services/hash";
import { User } from "../../db/entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    return `Hello `;
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    {
      firstName,
      lastName,
      username,
      email,
      password,
      dateOfBirth,
    }: RegisterInput
  ): Promise<User> {
    //   ! hash password
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    }).save();
    console.log(user);

    return user;
  }
}
