import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  Column,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

@ObjectType()
@Entity()
export class User_Stats extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;

  @Field()
  @Column({ type: 'number', nullable: true, default: 0 })
  cars_sold: number;

  @Field()
  @Column({ type: 'number', nullable: true, default: 0 })
  cars_bought: number;
}
