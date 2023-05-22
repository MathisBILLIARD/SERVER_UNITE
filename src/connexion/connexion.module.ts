import { Module } from '@nestjs/common';
import { ConnexionController } from './connexion.controller';
import { ConnexionService } from './connexion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { Connexion } from './connexion.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [MulterModule.register({dest: './upload',}),ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'files')}),TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Connexion])],
  controllers: [ConnexionController],
  providers: [ConnexionService],
  exports:[ConnexionService],
})
export class ConnexionModule {}
