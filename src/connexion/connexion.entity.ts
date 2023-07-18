import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UNITE_USERS')
export class Connexion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  email: string;

  @Column()
  bracelet: boolean;

  @Column()
  password: string;

  @Column()
  phonenumber: string;

  @Column()
  numberNight: number;

  @Column()
  numberParrainage: number;

  @Column()
  referralcode: string;

  @Column({ type: 'json', nullable: true })
  attente: Record<string, number>;

  @Column({ type: 'json', nullable: true })
  party_id: Record<string, number>;

  @Column({ type: 'json', nullable: true })
  favoris: number[];

}
