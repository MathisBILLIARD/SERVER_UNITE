import { Module } from '@nestjs/common';
import { ConnexionController } from 'src/connexion/connexion.controller';
import { BarService } from './beer-bar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { Bar } from './beer-bar.entity';

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig),TypeOrmModule.forFeature([Bar])],
  controllers: [ConnexionController],
  providers: [BarService],
  exports:[BarService],
})
export class BeerBarModule {}
