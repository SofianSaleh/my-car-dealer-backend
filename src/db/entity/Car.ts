import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Car extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text', { nullable: true })
  name: string;

  @Field()
  @Column('text', { nullable: true })
  description: string;

  @Field()
  @Column('text', { nullable: true })
  production_start: string;

  @Field()
  @Column('text', { nullable: true })
  production_end: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  'created_at': Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  'updated_at': Date;

  //! More info required
  // @Field()
  // name(@Root() parent: Product): string {
  //   return `${parent.firstName} ${parent.lastName}`;
  // }
}
