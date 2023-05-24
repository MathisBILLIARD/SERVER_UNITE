"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const beers_entity_1 = require("../beers/beers.entity");
const connexion_entity_1 = require("../connexion/connexion.entity");
const beer_bar_entity_1 = require("../beer-bar/beer-bar.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'hopbeer_user',
    password: 'hopbeer_user',
    database: 'HopBeer',
    entities: [beers_entity_1.Beers, connexion_entity_1.Connexion, beer_bar_entity_1.Bar],
};
//# sourceMappingURL=typeorm.config.js.map