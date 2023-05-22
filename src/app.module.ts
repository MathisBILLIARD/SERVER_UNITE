import { Module } from '@nestjs/common';
import { BeersModule } from './beers/beers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeersController } from './beers/beers.controller';
import { BeersService } from './beers/beers.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),BeersModule],
  controllers: [BeersController],
  providers: [BeersService],
})
export class AppModule {}
