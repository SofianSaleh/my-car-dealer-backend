import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

@ObjectType()
@Entity()
export class Offer extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;

  @Field()
  @Column({ type: 'text' })
  code: string;

  @Field()
  @Column({ type: 'bool', default: false })
  is_confirmed: boolean;
}
