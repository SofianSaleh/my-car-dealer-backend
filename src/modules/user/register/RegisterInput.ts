import { Length, Contains, IsEmail, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyRegistered";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @Contains(" ")
  @Length(3, 75)
  username: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email Already Exists" })
  email: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field()
  dateOfBirth: string;
}
