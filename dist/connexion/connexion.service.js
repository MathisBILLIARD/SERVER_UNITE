"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnexionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const connexion_entity_1 = require("./connexion.entity");
const typeorm_2 = require("typeorm");
let ConnexionService = class ConnexionService {
    constructor(ConnexionRepository) {
        this.ConnexionRepository = ConnexionRepository;
    }
    async createConnexion(id, prenom, nom, email, mdp) {
        const connec = new connexion_entity_1.Connexion();
        connec.id = id;
        connec.prenom = prenom;
        connec.nom = nom;
        connec.email = email;
        connec.mdp = mdp;
        await connec.save();
        return connec;
    }
    async getEmail() {
        const res = await this.ConnexionRepository.find();
        const client = res.map(cli => cli.email);
        return client;
    }
    async getPrenom() {
        const res = await this.ConnexionRepository.find();
        const nom = res.map(iencli => iencli.prenom);
        return nom;
    }
    async getMdp() {
        const res = await this.ConnexionRepository.find();
        const mdp = res.map(pass => pass.mdp);
        return mdp;
    }
    async getPersonne(email) {
        const personne = await this.ConnexionRepository.findOne({ where: { email } });
        return personne;
    }
    async getImagePersonne(email) {
        const photo = await this.ConnexionRepository.findOne({ where: { email } });
        return photo ? photo.image : null;
    }
    async update(id, client) {
        const clientUpdate = await this.ConnexionRepository.findOne({ where: { id } });
        if (!clientUpdate) {
            throw new common_1.NotFoundException("Client doesn't exist");
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
        if (client.biere) {
            clientUpdate.biere = client.biere;
        }
        const updatedClient = await this.ConnexionRepository.save(clientUpdate);
        return updatedClient;
    }
    async deleteClient(id) {
        await this.ConnexionRepository.delete(id);
    }
    async getBiere(id) {
        const client = await this.ConnexionRepository.find({ where: { id } });
        const favoris = client.map(beer => beer.biere);
        return favoris;
    }
    async postBeer(id, beerId, client) {
        const clientUpdate = await this.ConnexionRepository.findOne({ where: { id } });
        if (!clientUpdate) {
            throw new common_1.NotFoundException("Client doesn't exist");
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
};
ConnexionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(connexion_entity_1.Connexion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConnexionService);
exports.ConnexionService = ConnexionService;
//# sourceMappingURL=connexion.service.js.map