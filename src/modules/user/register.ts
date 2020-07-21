import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { hashPassword } from "../../services/hash";
import { User } from "../../db/entity/User";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    return `Hello `;
  }

  @Mutation(() => User)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("dateOfBirth") dateOfBirth: string
  ): Promise<User> {
    //   ! hash password
    const hashedPassword = await hashPassword(password);

    const user = await User.insert({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    });
    console.log(user);
    const users = await User.find();
    console.log(users);

    return users[0];
  }
}
