import { compare, hash } from "bcryptjs";
import { v4 } from "uuid";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
};

export const comparePassword = async (
  hashedPassword: string,
  password: string
) => {
  const isValid = await compare(password, hashedPassword);

  return isValid;
};

export const generateValidationCode = async () => {
  return v4();
};
