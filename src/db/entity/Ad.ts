import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';
import { Product } from './Product';

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @ManyToOne((_type) => User, (user) => user.id)
  user_id: User;

  @Field()
  @ManyToOne((_type) => Product, (product) => product.id)
  product_id: Product;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  'created_at': Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  'updated_at': Date;
}
