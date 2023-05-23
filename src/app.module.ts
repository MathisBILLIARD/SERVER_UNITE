import { Module } from '@nestjs/common';
import { BeersModule } from './beers/beers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeersController } from './beers/beers.controller';
import { BeersService } from './beers/beers.service';
import { Connexion } from './connexion/connexion.entity';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionService } from './connexion/connexion.service';
import { BeerBarController } from './beer-bar/beer-bar.controller';
import { BeerBarModule } from './beer-bar/beer-bar.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),BeersModule,TypeOrmModule.forFeature([Connexion]), BeerBarModule],
  controllers: [BeersController, ConnexionController, BeerBarController],
  providers: [BeersService, ConnexionService],
})
export class AppModule {}
