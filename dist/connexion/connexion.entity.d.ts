import { BaseEntity } from 'typeorm';
export declare class Connexion extends BaseEntity {
    id: string;
    prenom: string;
    nom: string;
    pays: string;
    email: string;
    mdp: string;
    image: string;
    ville: string;
    description: string;
    biere: string[];
}
