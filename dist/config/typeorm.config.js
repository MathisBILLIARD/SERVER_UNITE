"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const beers_entity_1 = require("../beers/beers.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'hopbeer_user',
    password: 'hopbeer_user',
    database: 'HopBeer',
    entities: [beers_entity_1.Beers],
};
//# sourceMappingURL=typeorm.config.js.map