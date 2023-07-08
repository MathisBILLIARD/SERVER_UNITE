import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connexion } from './connexion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConnexionService {
  constructor(
    @InjectRepository(Connexion)
    private readonly ConnexionRepository: Repository<Connexion>
  ) { }

  async createConnexion(id: string, prenom: string, nom: string, email: string, mdp: string, phonenumber: string, referralcode: string, numberParrainage: number) {
    const connec = new Connexion();
    connec.id = id;
    connec.firstname = prenom;
    connec.name = nom;
    connec.email = email;
    connec.password = mdp;
    connec.phonenumber = phonenumber;
    connec.referralcode = referralcode;
    connec.numberParrainage = numberParrainage;
    await connec.save();
    return connec;
  }

  async getEmail() {
    const res = await this.ConnexionRepository.find();
    const client = res.map(cli => cli.email);
    return client;
  }

  async getParty(email: string){
    const client = await this.ConnexionRepository.findOne({where: {email}});
    const partys = client.party_id;
    return partys
  }

  async getUserByParty(idParty: string): Promise<Connexion[]> {
    const clients: Connexion[] = [];
    const res = await this.ConnexionRepository.find();
  
    for (let client of res) {
      const partyIds = Object.keys(client.party_id).filter(key => key);
      if (partyIds.includes(idParty)) {
        clients.push(client);
      }
    }
  
    return clients;
  }
  
  

  async getCode(){
    const res = await this.ConnexionRepository.find();
    const code = res.map(cd => cd.referralcode);
    return code;
  }

  async getPrenom() {
    const res = await this.ConnexionRepository.find();
    const nom = res.map(iencli => iencli.firstname);
    return nom;
  }

  async getMdp() {
    const res = await this.ConnexionRepository.find();
    const mdp = res.map(pass => pass.password);
    return mdp;
  }

  async getPersonne(email: string): Promise<Connexion> {
    const personne = await this.ConnexionRepository.findOne({ where: { email } });
    return personne;
  }

  async getPersonneCode(referralcode: string): Promise<Connexion> {
    const personne = await this.ConnexionRepository.findOne({ where: { referralcode } });
    return personne;
  }

  async getPhoneNumber(email: string) {
    const phone = await this.ConnexionRepository.findOne({ where: { email } });
    return phone ? phone.phonenumber : null;
  }

  async getReferralcode(referralcode: string) {
    const code = await this.ConnexionRepository.findOne({ where: { referralcode } });
    return code ? code.phonenumber : null;
  }


  async update(id: string, client: Connexion) {
    const clientUpdate = await this.ConnexionRepository.findOne({ where: { id } });

    if (!clientUpdate) {
      throw new NotFoundException("Client doesn't exist");
    }

    if (client.firstname) {
      clientUpdate.firstname = client.firstname;
    }
    if (client.name) {
      clientUpdate.name = client.name;
    }
    if (client.email) {
      clientUpdate.email = client.email;
    }
    if (client.password) {
      clientUpdate.password = client.password;
    }
    if (client.phonenumber) {
      clientUpdate.phonenumber = client.phonenumber;
    }
    if (client.referralcode) {
      clientUpdate.referralcode = client.referralcode;
    }
    if(client.numberParrainage){
      clientUpdate.numberParrainage = client.numberParrainage;
    }
    if(client.party_id){
      clientUpdate.party_id = client.party_id;
    }


    const updatedClient = await this.ConnexionRepository.save(clientUpdate);
    return updatedClient;
  }

  async deleteClient(id: string) {
    await this.ConnexionRepository.delete(id);
  }

}

