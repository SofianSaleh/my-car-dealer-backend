import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { comparePassword } from "../../services/hash";
import { User } from "../../db/entity/User";
// import { RegisterInput } from "./register/RegisterInput";
import { MyContext } from "../../types/MyContext";
import {
  createNormalToken,
  createRefreshToken,
} from "../../middleware/authentication";

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    console.log(ctx);
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    ctx.req;
    const isPasswordCorrect = comparePassword(user.password, password);
    if (!isPasswordCorrect) return null;

    const token = createNormalToken(user.id);
    console.log(token);
    const refresh = createRefreshToken(user.id);

    ctx.res.cookie(`refresh-token`, refresh, { httpOnly: true });

    return user;
  }
}
