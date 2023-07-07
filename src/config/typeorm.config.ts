import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connexion } from 'src/connexion/connexion.entity';
import { Events } from 'src/events/events.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'Cors!cat39',
    database: 'Unite',
    entities: [Connexion, Events],
};