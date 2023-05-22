"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnexionModule = void 0;
const common_1 = require("@nestjs/common");
const connexion_controller_1 = require("./connexion.controller");
const connexion_service_1 = require("./connexion.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../config/typeorm.config");
const connexion_entity_1 = require("./connexion.entity");
const platform_express_1 = require("@nestjs/platform-express");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let ConnexionModule = class ConnexionModule {
};
ConnexionModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register({ dest: './upload', }), serve_static_1.ServeStaticModule.forRoot({ rootPath: (0, path_1.join)(__dirname, '..', 'files') }), typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig), typeorm_1.TypeOrmModule.forFeature([connexion_entity_1.Connexion])],
        controllers: [connexion_controller_1.ConnexionController],
        providers: [connexion_service_1.ConnexionService],
        exports: [connexion_service_1.ConnexionService],
    })
], ConnexionModule);
exports.ConnexionModule = ConnexionModule;
//# sourceMappingURL=connexion.module.js.map