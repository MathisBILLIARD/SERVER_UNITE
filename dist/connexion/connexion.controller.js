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
exports.ConnexionController = void 0;
const common_1 = require("@nestjs/common");
const connexion_service_1 = require("./connexion.service");
const connexion_entity_1 = require("./connexion.entity");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const multer_1 = require("multer");
const rxjs_1 = require("rxjs");
let ConnexionController = class ConnexionController {
    constructor(connexionService) {
        this.connexionService = connexionService;
    }
    getPrenom() {
        console.log('Requête GET /nom reçue');
        return this.connexionService.getPrenom();
    }
    getEmail() {
        console.log('Requête GET /email reçue');
        return this.connexionService.getEmail();
    }
    getMdp() {
        console.log('Requête GET /pass reçue');
        return this.connexionService.getMdp();
    }
    getPersonne(email) {
        return this.connexionService.getPersonne(email);
    }
    updateClient(id, client) {
        return this.connexionService.update(id, client);
    }
    deleteClient(id) {
        return this.connexionService.deleteClient(id);
    }
    async createConnexion(id, prenom, nom, email, mdp, phonenumber, referralcode, numberParrainage) {
        const connec = new connexion_entity_1.Connexion();
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
    upload(file) {
        return (0, rxjs_1.of)({ imagePath: file.filename });
    }
};
__decorate([
    (0, common_1.Get)('/nom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConnexionController.prototype, "getPrenom", null);
__decorate([
    (0, common_1.Get)('/email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConnexionController.prototype, "getEmail", null);
__decorate([
    (0, common_1.Get)('/pass'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConnexionController.prototype, "getMdp", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConnexionController.prototype, "getPersonne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, connexion_entity_1.Connexion]),
    __metadata("design:returntype", Promise)
], ConnexionController.prototype, "updateClient", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConnexionController.prototype, "deleteClient", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('firstname')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('email')),
    __param(4, (0, common_1.Body)('password')),
    __param(5, (0, common_1.Body)('phonenumber')),
    __param(6, (0, common_1.Body)('referralcode')),
    __param(7, (0, common_1.Body)('numberParrainage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], ConnexionController.prototype, "createConnexion", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload',
            filename: (req, file, cb) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '');
                const extension = path.parse(file.originalname).ext;
                cb(null, `${filename}${extension}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], ConnexionController.prototype, "upload", null);
ConnexionController = __decorate([
    (0, common_1.Controller)('connexion'),
    __metadata("design:paramtypes", [connexion_service_1.ConnexionService])
], ConnexionController);
exports.ConnexionController = ConnexionController;
//# sourceMappingURL=connexion.controller.js.map