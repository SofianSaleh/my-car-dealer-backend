import { ObjectType, Field } from 'type-graphql';
import { User } from '../db/entity/User';

@ObjectType()
export class FieldError {
  @Field()
  field: string;

  @Field()
  msg: string;
}

@ObjectType()
export class UserReturn {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
