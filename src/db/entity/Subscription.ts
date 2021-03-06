import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

export enum SubscriptionTypes {
  Free = 'Free',
  Premium = 'Premium',
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
    enum: SubscriptionTypes,
    default: SubscriptionTypes.Free,
  })
  type: SubscriptionTypes;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  'created_at': Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  'updated_at': Date;
}
