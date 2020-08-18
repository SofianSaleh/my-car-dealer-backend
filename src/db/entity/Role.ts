import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

export enum RoleTypes {
  Normal = 'Normal',
  Admin = 'Admin',
}

@ObjectType()
@Entity()
export class Subscription extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  url: string;

  @Field()
  @Column({
    type: 'enum',
    enum: RoleTypes,
    default: RoleTypes.Normal,
  })
  type: RoleTypes;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;
}
