import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
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
  @Column({ type: 'int', nullable: true, default: 0 })
  cars_sold: number;

  @Field()
  @Column({ type: 'int', nullable: true, default: 0 })
  cars_bought: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
    default: () => 'LOCALTIMESTAMP',
  })
  create_at: string;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_at',
    default: () => 'LOCALTIMESTAMP',
  })
  update_at: string;
}
