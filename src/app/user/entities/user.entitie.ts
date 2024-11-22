import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  name: string;
  email: string;
}

@Entity({ name: "users" })
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;


  constructor(email: string, name: string) {
    this.id = uuidv4();
    this.email = email;
    this.name = name;
  }
}
