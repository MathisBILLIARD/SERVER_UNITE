"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeersModule = void 0;
const common_1 = require("@nestjs/common");
const beers_controller_1 = require("./beers.controller");
const beers_service_1 = require("./beers.service");
const typeorm_1 = require("@nestjs/typeorm");
const beers_entity_1 = require("./beers.entity");
let BeersModule = class BeersModule {
};
BeersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([beers_entity_1.Beers])],
        controllers: [beers_controller_1.BeersController],
        providers: [beers_service_1.BeersService],
        exports: [typeorm_1.TypeOrmModule]
    })
], BeersModule);
exports.BeersModule = BeersModule;
//# sourceMappingURL=beers.module.js.map