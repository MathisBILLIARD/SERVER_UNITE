import { Module } from '@nestjs/common';
import { BeersController } from './beers.controller';
import { BeersService } from './beers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beers } from './beers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beers])],
  controllers: [BeersController],
  providers: [BeersService],
  exports: [TypeOrmModule]
})
export class BeersModule {}
