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
  password: string;

  @Column()
  phonenumber: string;

  @Column()
  numberParrainage: number;

  @Column()
  referralcode: string;

  @Column({ type: 'json', nullable: true })
  party_id: Record<string, number>;

}
