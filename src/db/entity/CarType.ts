import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Car } from './Car';

export enum CarTypes {
  Sedan = 'Sedan',
  Hatchback = 'Hatchback',
  Lemousine = 'Lemousine',
}

@ObjectType()
@Entity()
export class Car_Type extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @ManyToOne((_type) => Car, (car) => car.id)
  car_id: Car;

  @Field()
  @Column({
    type: 'enum',
    enum: CarTypes,
    default: CarTypes.Sedan,
  })
  type: CarTypes;

  @Field()
  @Column('text', { nullable: true })
  car_make_start: string;

  @Field()
  @Column('text', { nullable: true })
  car_make_end: string;

  // @Field()
  // name(@Root() parent: Product): string {
  //   return `${parent.firstName} ${parent.lastName}`;
  // }
}
