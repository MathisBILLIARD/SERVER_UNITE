import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { Events } from './events.entity';

@Module({
  imports : [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Events])],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [EventsService]
})
export class EventsModule {}
