import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

export enum SubscriptionTypes {
  Free = 'Free',
  Premium = 'Premium',
}

@ObjectType()
@Entity()
export class Image extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  url: string;

  @Field()
  @Column({
    type: 'enum',
    enum: SubscriptionTypes,
    default: SubscriptionTypes.Free,
  })
  type: SubscriptionTypes;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;
}
