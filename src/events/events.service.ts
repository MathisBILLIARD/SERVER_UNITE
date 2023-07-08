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
      throw new NotFoundException("Client doesn't exist");
    }
    if (event.name) {
      eventUpdate.name = event.name;
    }
    if (event.image) {
      eventUpdate.image = event.image;
    }
    if (event.price) {
      eventUpdate.price = event.price;
    }
    if (event.nbConso) {
      eventUpdate.nbConso = event.nbConso;
    }
    if (event.description) {
      eventUpdate.description = event.description;
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

}
