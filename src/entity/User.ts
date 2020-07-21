import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: true })
  firstName: string;

  @Column("text", { nullable: true })
  lastName: string;

  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  //   @Column("boolean", {default: false })
  //   is_valid: boolean;

  @Column()
  date_of_birth: Date;
}
