import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Events } from './events.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private readonly EventRepository: Repository<Events>,
  ) {}
  async updateEvent(id: string, event: Events) {
    const eventUpdate = await this.EventRepository.findOne({ where: { id } });

    if (!eventUpdate) {
      throw new NotFoundException("Event doesn't exist");
    }
    if (event.name) {
      eventUpdate.name = event.name;
    }
    if (event.image_name) {
      eventUpdate.image_name = event.image_name;
    }
    if( event.video_name){
      eventUpdate.video_name = event.video_name;
    }
    if (event.price) {
      eventUpdate.price = event.price;
    }
    if (event.description) {
      eventUpdate.description = event.description;
    }
    if(event.capacity){
      eventUpdate.capacity = event.capacity;
    }
    if(event.date){
      eventUpdate.date = event.date;
    }
    if(event.start_time){
      eventUpdate.start_time = event.start_time;
    }
    if(event.end_time){
      eventUpdate.end_time = event.end_time;
    }
    if(event.place){
      eventUpdate.place = event.place;
    }
    if(event.address){
      eventUpdate.address = event.address;
    }
    if(event.geo){
      eventUpdate.geo = event.geo;
    }
    if(event.music){
      eventUpdate.music = event.music;
    }
    if(event.dispo){
      eventUpdate.dispo = event.dispo;
    }
    if(event.boat){
      eventUpdate.boat = event.boat;
    }
    const updatedEvent = await this.EventRepository.save(eventUpdate);
    return updatedEvent;
  }

  async deleteEvent(id: string) {
    await this.EventRepository.delete(id);
  }

  async getEvent(id: string): Promise<Events> {
    const event = await this.EventRepository.findOne({
      where: { id },
    });
    return event;
  }

  async getTout(): Promise<Events[]> {
    return this.EventRepository.find();
  }

}
