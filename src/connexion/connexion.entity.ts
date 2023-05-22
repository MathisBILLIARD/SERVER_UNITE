import { AfterLoad, BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('connexion')
export class Connexion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  prenom: string;

  @Column()
  nom: string;

  @Column()
  pays: string;

  @Column()
  email: string;

  @Column()
  mdp: string;

  @Column()
  image: string; 

  @Column()
  ville: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
biere: string[];
}
