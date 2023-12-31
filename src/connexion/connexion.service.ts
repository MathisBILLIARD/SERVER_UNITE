import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connexion } from './connexion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConnexionService {
  constructor(
    @InjectRepository(Connexion)
    private readonly ConnexionRepository: Repository<Connexion>,
  ) {}

  async createConnexion(
    id: string,
    prenom: string,
    nom: string,
    email: string,
    mdp: string,
    phonenumber: string,
    numberNight: number,
    bracelet: boolean,
    referralcode: string,
    numberParrainage: number,
    attente: Record<string, number>,
    party_id: Record<string, number>,
    favoris: number[]
  ) {
    const connec = new Connexion();
    connec.id = id;
    connec.firstname = prenom;
    connec.name = nom;
    connec.email = email;
    connec.password = mdp;
    connec.phonenumber = phonenumber;
    connec.referralcode = referralcode;
    connec.bracelet = bracelet;
    connec.numberNight = numberNight;
    connec.numberParrainage = numberParrainage;
    connec.attente = attente;
    connec.party_id = party_id;
    connec.favoris = favoris;
    await connec.save();
    return connec;
  }

  async getEmail() {
    const res = await this.ConnexionRepository.find();
    const client = res.map((cli) => cli.email);
    return client;
  }

  async getTout(){
    const res = await this.ConnexionRepository.find();
    return res;
  }

  async getParty(email: string) {
    const client = await this.ConnexionRepository.findOne({ where: { email } });
    const partys = client.party_id;
    return partys;
  }

  async findByPartyId(partyId: string): Promise<Connexion[]> {
    const connexions = await this.ConnexionRepository
      .createQueryBuilder('connexion')
      .getMany();
  
    const validConnexions = connexions.filter(connexion => {
      const partyIdKey = partyId.toString();
      return connexion.party_id && connexion.party_id[partyIdKey] !== undefined;
    });
  
    return validConnexions;
  }

  async findAttByPartyId(partyId: string): Promise<Connexion[]> {
    const connexions = await this.ConnexionRepository
      .createQueryBuilder('connexion')
      .getMany();
  
    const validConnexions = connexions.filter(connexion => {
      const partyIdKey = partyId.toString();
      return connexion.attente && connexion.attente[partyIdKey] !== undefined;
    });
  
    return validConnexions;
  }

  async findAttenteByPartyId(): Promise<Connexion[]> {
    const connexions = await this.ConnexionRepository
      .createQueryBuilder('connexion')
      .getMany();
  
    const validConnexions = connexions.filter(connexion => {
      return connexion.attente;
    });
  
    return validConnexions;
  }
  
  async getCode() {
    const res = await this.ConnexionRepository.find();
    const code = res.map((cd) => cd.referralcode);
    return code;
  }

  async getPrenom() {
    const res = await this.ConnexionRepository.find();
    const nom = res.map((iencli) => iencli.firstname);
    return nom;
  }

  async getMdp() {
    const res = await this.ConnexionRepository.find();
    const mdp = res.map((pass) => pass.password);
    return mdp;
  }

  async getPersonne(email: string): Promise<Connexion> {
    const personne = await this.ConnexionRepository.findOne({
      where: { email },
    });
    return personne;
  }

  async getPersonneCode(referralcode: string): Promise<Connexion> {
    const personne = await this.ConnexionRepository.findOne({
      where: { referralcode },
    });
    return personne;
  }

  async getPhoneNumber(email: string) {
    const phone = await this.ConnexionRepository.findOne({ where: { email } });
    return phone ? phone.phonenumber : null;
  }

  async getReferralcode(referralcode: string) {
    const code = await this.ConnexionRepository.findOne({
      where: { referralcode },
    });
    return code ? code.phonenumber : null;
  }

  async update(id: string, client: Connexion) {
    const clientUpdate = await this.ConnexionRepository.findOne({
      where: { id },
    });

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
    if(client.bracelet){
      clientUpdate.bracelet = client.bracelet;
    }
    if(client.numberNight){
      clientUpdate.numberNight= client.numberNight;
    }
    if (client.referralcode) {
      clientUpdate.referralcode = client.referralcode;
    }
    if (client.numberParrainage) {
      clientUpdate.numberParrainage = client.numberParrainage;
    }
    if(client.attente){
      clientUpdate.attente = client.attente;
    }
    if (client.party_id) {
      clientUpdate.party_id = client.party_id;
    }
    if(client.favoris){
      clientUpdate.favoris = client.favoris;
    }

    const updatedClient = await this.ConnexionRepository.save(clientUpdate);
    return updatedClient;
  }

  async deleteClient(id: string) {
    await this.ConnexionRepository.delete(id);
  }
}
