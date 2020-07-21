import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    return `Hello `;
  }

  @Mutation(() => String)
  async register(
      @Arg("firstName") firstName: String
      @Arg("lastName") lastName: String
      @Arg("username") username: String
      @Arg("email") email: String
      @Arg("password") password: String
      ) {
        //   ! hash password
        
    return firstName;
  }
}
