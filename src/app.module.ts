import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { Connexion } from './connexion/connexion.entity';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionService } from './connexion/connexion.service';



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Connexion])],
  controllers: [ConnexionController],
  providers: [ConnexionService],
})
export class AppModule { }
