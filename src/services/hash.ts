import argon from 'argon2';
import { v4 } from 'uuid';

export const hashPassword = async (password: string) => {
  const hashedPassword = await argon.hash(password);

  return hashedPassword;
};

export const comparePassword = async (
  hashedPassword: string,
  password: string
) => {
  const isValid = await argon.verify(hashedPassword, password);

  return isValid;
};

export const generateValidationCode = async () => {
  return v4();
};
