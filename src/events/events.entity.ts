import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UNITE_PARTY')
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'json', nullable: true })
  price: Record<string, number>;

  @Column()
  date : Date;

  @Column({ type: 'time' })
  start_time : string;

  @Column()
  capacity: number;

  @Column()
  image_name: string;

  @Column()
  video_name: string;

  @Column()
  description: string;

  @Column()
  place: string;

  @Column()
  address: string;

}