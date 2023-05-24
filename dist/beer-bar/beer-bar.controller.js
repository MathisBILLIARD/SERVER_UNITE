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
exports.BeerBarController = void 0;
const common_1 = require("@nestjs/common");
const beer_bar_service_1 = require("./beer-bar.service");
let BeerBarController = class BeerBarController {
    constructor(barService) {
        this.barService = barService;
    }
    async getApi(longitude, latitude, radius) {
        try {
            console.log('test');
            const address = '';
            const apiKey = 'AIzaSyDuBnAv5wHr7Pi1Lxrd9CBRPIy76IS8cxk';
            const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${longitude},${latitude}&radius=${radius}&keyword=bar&key=${apiKey}&Atmosphere=serves_beer`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);
            return JSON.stringify(data);
        }
        catch (error) {
            console.error(error);
            return JSON.stringify({ error: "Une erreur s'est produite lors de la récupération des données." });
        }
    }
    async getBarjson(bar_name) {
        return this.barService.Get_BarJSON(bar_name);
    }
    async getBarfromBeer(beer_name, indexbeer, bar_in_radius, bar_in_tabbar) {
        return this.barService.get_Bar_from_Beer_file(beer_name, indexbeer, bar_in_radius, bar_in_tabbar);
    }
    async getBarfromBeers(beer_name, indexbeer, bar_in_radius) {
        return this.barService.get_Bar_from_Beer_file_empty(beer_name, indexbeer, bar_in_radius);
    }
    async getfrPriceomBeer(bar_name, indexJSON) {
        return this.barService.get_Price_from_Beer_file(bar_name, indexJSON);
    }
};
__decorate([
    (0, common_1.Get)(':longitude/:latitude/:radius'),
    __param(0, (0, common_1.Param)('longitude')),
    __param(1, (0, common_1.Param)('latitude')),
    __param(2, (0, common_1.Param)('radius')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], BeerBarController.prototype, "getApi", null);
__decorate([
    (0, common_1.Get)('/barjson/:bar_name'),
    __param(0, (0, common_1.Param)('bar_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BeerBarController.prototype, "getBarjson", null);
__decorate([
    (0, common_1.Get)('/Bar_beer/:beer_name/:indexbeer/beer/:bar_in_radius/:bar_in_tabbar'),
    __param(0, (0, common_1.Param)('beer_name')),
    __param(1, (0, common_1.Param)('indexbeer')),
    __param(2, (0, common_1.Param)('bar_in_radius')),
    __param(3, (0, common_1.Param)('bar_in_tabbar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], BeerBarController.prototype, "getBarfromBeer", null);
__decorate([
    (0, common_1.Get)('/Bar_beer/:beer_name/:indexbeer/beer/ash1/ash2/:bar_in_radius'),
    __param(0, (0, common_1.Param)('beer_name')),
    __param(1, (0, common_1.Param)('indexbeer')),
    __param(2, (0, common_1.Param)('bar_in_radius')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], BeerBarController.prototype, "getBarfromBeers", null);
__decorate([
    (0, common_1.Get)('/Price/get/:bar_name/test/:indexJSON/test2'),
    __param(0, (0, common_1.Param)('bar_name')),
    __param(1, (0, common_1.Param)('indexJSON')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BeerBarController.prototype, "getfrPriceomBeer", null);
BeerBarController = __decorate([
    (0, common_1.Controller)('beer-bar'),
    __metadata("design:paramtypes", [beer_bar_service_1.BarService])
], BeerBarController);
exports.BeerBarController = BeerBarController;
//# sourceMappingURL=beer-bar.controller.js.map