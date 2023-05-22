import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connexion } from './connexion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConnexionService {
    constructor(
        @InjectRepository(Connexion)
        private readonly ConnexionRepository : Repository<Connexion>
    ){}

    async createConnexion(id : string, prenom : string, nom :string, email: string, mdp:string){
        const connec = new Connexion();
        connec.id = id;
        connec.prenom = prenom;
        connec.nom = nom;
        connec.email = email;
        connec.mdp = mdp;
        await connec.save();
        return connec;
    }

    async getEmail(){
        const res = await this.ConnexionRepository.find();
        const client = res.map(cli=>cli.email);
        return client;
    }

    async getPrenom(){
        const res = await this.ConnexionRepository.find();
        const nom = res.map(iencli=>iencli.prenom);
        return nom;
    }

    async getMdp(){
        const res = await this.ConnexionRepository.find();
        const mdp = res.map(pass=>pass.mdp);
        return mdp;
    }

    async getPersonne(email: string): Promise<Connexion> {
        const personne = await this.ConnexionRepository.findOne({ where: { email } });
        return personne;
    }

    async getImagePersonne(email: string){
        const photo = await this.ConnexionRepository.findOne({where : {email}});
        return photo ? photo.image : null;
    }

    async update(id: string, client: Connexion) {
        const clientUpdate = await this.ConnexionRepository.findOne({ where: { id } });
      
        if (!clientUpdate) {
          throw new NotFoundException("Client doesn't exist");
        }
      
        if (client.prenom) {
          clientUpdate.prenom = client.prenom;
        }
        if (client.nom) {
          clientUpdate.nom = client.nom;
        }
        if (client.email) {
          clientUpdate.email = client.email;
        }
        if (client.mdp) {
          clientUpdate.mdp = client.mdp;
        }
        if (client.hasOwnProperty('image')) {
          clientUpdate.image = client.image;
        }
        if (client.ville) {
          clientUpdate.ville = client.ville;
        }
        if (client.pays) {
          clientUpdate.pays = client.pays;
        }
        if (client.description) {
          clientUpdate.description = client.description;
        }
        if (client.biere){
          clientUpdate.biere = client.biere;
        }
      
        const updatedClient = await this.ConnexionRepository.save(clientUpdate);
        return updatedClient;
    }

    async deleteClient(id: string){
        await this.ConnexionRepository.delete(id);
    }

    async getBiere(id: string){
      const client = await this.ConnexionRepository.find({ where: { id } });
      const favoris = client.map(beer=>beer.biere);
      return favoris;
    }

    // service.ts
async postBeer(id: string, beerId: string, client: Connexion) {
  const clientUpdate = await this.ConnexionRepository.findOne({ where: { id } });

  if (!clientUpdate) {
    throw new NotFoundException("Client doesn't exist");
  }

  if (client.prenom) {
    clientUpdate.prenom = client.prenom;
  }
  if (client.nom) {
    clientUpdate.nom = client.nom;
  }
  if (client.email) {
    clientUpdate.email = client.email;
  }
  if (client.mdp) {
    clientUpdate.mdp = client.mdp;
  }
  if (client.hasOwnProperty('image')) {
    clientUpdate.image = client.image;
  }
  if (client.ville) {
    clientUpdate.ville = client.ville;
  }
  if (client.pays) {
    clientUpdate.pays = client.pays;
  }
  if (client.description) {
    clientUpdate.description = client.description;
  }
  if (!clientUpdate.biere) {
    clientUpdate.biere = [];
  }

  clientUpdate.biere.push(beerId);

  const updatedClient = await this.ConnexionRepository.save(clientUpdate);
  return updatedClient;
}

    
}

