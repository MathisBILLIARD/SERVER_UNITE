import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Beers } from 'src/beers/beers.entity';
import { Connexion } from 'src/connexion/connexion.entity';
import { Bar } from 'src/beer-bar/beer-bar.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type : 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'hopbeer_user',
    password: 'hopbeer_user',
    database: 'HopBeer',
    entities: [Beers, Connexion, Bar],
};