import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text', { nullable: true })
  title: string;

  @Field()
  @Column('text', { nullable: true })
  description: string;

  @Field()
  @Column('text', { nullable: true })
  price: string;

  @Field()
  @Column('text', { nullable: true })
  location: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  'created_at': Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  'updated_at': Date;
  // @Field()
  // name(@Root() parent: Product): string {
  //   return `${parent.firstName} ${parent.lastName}`;
  // }
}
