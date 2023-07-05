"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const connexion_entity_1 = require("../connexion/connexion.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'Cors!cat39',
    database: 'Unite',
    entities: [connexion_entity_1.Connexion],
};
//# sourceMappingURL=typeorm.config.js.map