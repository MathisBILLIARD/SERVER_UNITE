import { Connexion } from './connexion.entity';
import { Repository } from 'typeorm';
export declare class ConnexionService {
    private readonly ConnexionRepository;
    constructor(ConnexionRepository: Repository<Connexion>);
    createConnexion(id: string, prenom: string, nom: string, email: string, mdp: string, phonenumber: string): Promise<Connexion>;
    getEmail(): Promise<string[]>;
    getPrenom(): Promise<string[]>;
    getMdp(): Promise<string[]>;
    getPersonne(email: string): Promise<Connexion>;
    getPhoneNumber(email: string): Promise<string>;
    update(id: string, client: Connexion): Promise<Connexion>;
    deleteClient(id: string): Promise<void>;
}
