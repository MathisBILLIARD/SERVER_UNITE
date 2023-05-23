import { type } from "os";
import { Entity,Column,PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("beer_bar")
export class Bar extends BaseEntity{
    @PrimaryGeneratedColumn()
  id_Bar: number;

  @Column()
  Bar_name: string;

  @Column('text')
  Beer_JSON: string;
}