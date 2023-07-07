import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { Connexion } from './connexion/connexion.entity';
import { ConnexionController } from './connexion/connexion.controller';
import { ConnexionService } from './connexion/connexion.service';
import { EventsModule } from './events/events.module';



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Connexion]), EventsModule],
  controllers: [ConnexionController],
  providers: [ConnexionService],
})
export class AppModule { }
