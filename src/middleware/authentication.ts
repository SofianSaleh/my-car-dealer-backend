import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
import { redis } from "../utils/redis";

export const createNormalToken = (userId: string) => {
  const token = jwt.sign(
    {
      user: userId,
      type: "normal",
      // validated: user.is_verified,
    },
    `${process.env.SECRET_1}`,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

export const createRefreshToken = (userId: string) => {
  const refreshToken = jwt.sign(
    {
      user: userId,
      type: "normal1",
      // validated: user.is_verified,
    },
    `${process.env.SECRET_2}`,
    {
      expiresIn: "7d",
    }
  );
  redis.append(userId, refreshToken);
  return refreshToken;
};

// export const validateToken = (token: string, secret: string) => {
// try {
//   const validatedToken = jwt.verify(token, secret);
//   return validatedToken
// } catch (e) {

// }
// };
// export const checkRefresh = (userId: string, token: string) => {
// return refreshTokens[userId] === token;
// };

// export const tokenRefresh = (token: string) => {
// try {
// let secret = `${process.env.SECRET_2}`;
// let { success, other } = validateToken(token, secret);
// if (!success)

// if (refToken.type !== "normal1") return responseFormatter(false, `Wrong token type`, null)
// if (!checkRefresh(other.user, token))

// let newToken = createNormalToken({
// id: `${other.user}`,
// is_verified: other.validated,
// });
// return newToken;
// } catch (e) {
// throw e;/
// }
// };

// export const getToken = (req: any) => {
//   let token = req.headers["authorization"].split(" ")[1];
//   if (!token) return `Error No tokens were found`;
//   return token;
// };

// export const validateTokens = (refresh: boolean) => {
// const validation = async (req: any, res: any, next: any) => {
//   try {
//     let token = getToken(req);
//     if (token.includes("Error")) return responseFormatter(false, token, null);
//     let { success, msg, other } = refresh
//       ? validateToken(token, `${process.env.SECRET_2}`)
//       : validateToken(token, `${process.env.SECRET_1}`);
//     if (!success) res.json(responseFormatter(false, msg, null));
//     req[token] = token;
//     req["user"] = other;
//     //! validate the role
//     console.log(other);
//     if (other.validated) {
//       next();
//     } else {
//       res.json(responseFormatter(false, `User is not validated`, null));
//     }
//   } catch (e) {
//     return responseFormatter(false, `UnAuthorized`, null);
//   }
// };
// return validation;
// };
