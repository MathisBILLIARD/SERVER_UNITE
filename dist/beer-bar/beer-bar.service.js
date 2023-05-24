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
exports.BarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const beer_bar_entity_1 = require("./beer-bar.entity");
let BarService = class BarService {
    constructor(ConnexionRepository) {
        this.ConnexionRepository = ConnexionRepository;
    }
    async Get_Bar() {
        const bar = await this.ConnexionRepository.find();
        const namebar = bar.map(name => name.Bar_name);
        return namebar;
    }
    async Get_BarJSON(bar_name) {
        const bar = await this.ConnexionRepository.query(`SELECT Beer_JSON FROM beer_bar WHERE Bar_name ="` + bar_name + `";`);
        console.log(`SELECT Beer_JSON FROM beer_bar WHERE Bar_name ="` + bar_name + `";`);
        return bar;
    }
    async Get_ALLBAR() {
        const bar = await this.ConnexionRepository.find();
        return bar;
    }
    async getBarBeer() {
        const bar = await this.ConnexionRepository
            .createQueryBuilder('beer_bar')
            .select("Beer_JSON->'$.beer_name'", 'beer_name')
            .getRawMany();
        return bar.map((item) => item.beer_name);
    }
    async get_Bar_from_Beer_file(beer_name, indexbeer, bar_in_radius, bar_in_tabbar) {
        const bar = await this.ConnexionRepository.query(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[` + indexbeer + `]'="` + beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "` + bar_in_tabbar + `";`);
        console.log(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[` + indexbeer + `]'="` + beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "` + bar_in_tabbar + `";`);
        return bar;
    }
    async get_Bar_from_Beer_file_empty(beer_name, indexbeer, bar_in_radius) {
        const bar = await this.ConnexionRepository.query(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[` + indexbeer + `]'="` + beer_name + `" AND Bar_name = "` + bar_in_radius + `";`);
        console.log(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[` + indexbeer + `]'="` + beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "";`);
        return bar;
    }
    async get_Price_from_Beer_file(bar_name, indexJSON) {
        const bar = await this.ConnexionRepository.query(`SELECT Beer_JSON->'$.price[` + indexJSON + `]' FROM beer_bar WHERE Bar_name = "` + bar_name + `";`);
        console.log(`SELECT Beer_JSON->'$.price' FROM beer_bar WHERE Bar_name ="` + bar_name + `";`);
        return bar;
    }
};
BarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(beer_bar_entity_1.Bar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BarService);
exports.BarService = BarService;
//# sourceMappingURL=beer-bar.service.js.map