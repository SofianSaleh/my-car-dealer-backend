import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text', { nullable: true })
  firstName: string;

  @Field()
  @Column('text', { nullable: true })
  lastName: string;

  @Field()
  @Column('text', { unique: true, nullable: false })
  username: string;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @CreateDateColumn({ type: 'date' })
  dateOfBirth: string;

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }
}
