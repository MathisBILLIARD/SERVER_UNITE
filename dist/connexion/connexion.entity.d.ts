import { BaseEntity } from 'typeorm';
export declare class Connexion extends BaseEntity {
    id: string;
    name: string;
    firstname: string;
    email: string;
    password: string;
    phonenumber: string;
}
