import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UNITE_PARTY')
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  date : Date;

  @Column({ type: 'time' })
  start_time : string;

  @Column()
  capacity: number;

  @Column()
  image_name: string;

  @Column()
  description: string;

  @Column()
  nbConso: number;

  @Column()
  place: string;

  @Column()
  address: string;

}