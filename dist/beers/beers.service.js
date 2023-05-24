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
exports.BeersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const beers_entity_1 = require("./beers.entity");
const typeorm_2 = require("typeorm");
let BeersService = class BeersService {
    constructor(beersRepository) {
        this.beersRepository = beersRepository;
    }
    async getAll() {
        const res = await this.beersRepository.find();
        return res;
    }
    async getById(id) {
        const res = await this.beersRepository.findOneBy({ id: id });
        if (!res) {
            throw new common_1.NotFoundException(`beer with id ${id} could not be found`);
        }
        return res;
    }
    async getByName(beerName) {
        const res = await this.beersRepository.findBy({
            name: (0, typeorm_2.Like)(`%${beerName}%`),
        });
        if (!res) {
            throw new common_1.NotFoundException(`beer with name ${beerName} could not be found`);
        }
        return res;
    }
    async getRandom() {
        let randomID = Math.floor(Math.random() * 233729);
        let res = await this.beersRepository.findOneBy({ id: randomID });
        ;
        while (res.img_original === null) {
            randomID = Math.floor(Math.random() * 233729);
            res = await this.beersRepository.findOneBy({ id: randomID });
            ;
        }
        return res;
    }
    async createBeerDto(createBeerDto) {
        const { id, name, created, description, img_optimized, img_original, alcohol, beer_type, beer_type_family, beer_type_family_color, star_1, star_2, star_3, star_4, star_5, avg_rating, first_avg_rating, brewery, country } = createBeerDto;
        const beer = new beers_entity_1.Beers();
        beer.id = id;
        beer.name = name;
        beer.created = created;
        beer.description = description;
        beer.img_optimized = img_optimized;
        beer.img_original = img_original;
        beer.alcohol = alcohol;
        beer.beer_type = beer_type;
        beer.beer_type_family = beer_type_family;
        beer.beer_type_family_color = beer_type_family_color;
        beer.star_1 = star_1;
        beer.star_2 = star_2;
        beer.star_3 = star_3;
        beer.star_4 = star_4;
        beer.star_5 = star_5;
        beer.avg_rating = avg_rating;
        beer.first_avg_rating = first_avg_rating;
        beer.brewery = brewery;
        beer.country = country;
        await beer.save();
        return beer;
    }
};
BeersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(beers_entity_1.Beers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BeersService);
exports.BeersService = BeersService;
//# sourceMappingURL=beers.service.js.map