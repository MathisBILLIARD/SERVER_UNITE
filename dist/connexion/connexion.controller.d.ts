import { ConnexionService } from './connexion.service';
import { Connexion } from './connexion.entity';
import { Observable } from 'rxjs';
export declare class ConnexionController {
    private connexionService;
    constructor(connexionService: ConnexionService);
    getPrenom(): Promise<string[]>;
    getEmail(): Promise<string[]>;
    getMdp(): Promise<string[]>;
    getPersonne(email: string): Promise<Connexion>;
    updateClient(id: string, client: Connexion): Promise<Connexion>;
    deleteClient(id: string): Promise<void>;
    createConnexion(id: string, prenom: string, nom: string, email: string, mdp: string, phonenumber: string, referralcode: string, numberParrainage: number): Promise<Connexion>;
    upload(file: any): Observable<Object>;
}
