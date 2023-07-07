import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('EVENTS')
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  phonenumber: string;

  @Column()
  referralcode: string;

}