import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Patch, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Events } from './events.entity';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import * as path from 'path';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService){}
    @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createConnexion(
    @Body('id') id: string,
    @Body('name') nom: string,
    @Body('price') price: number,
    @Body('image') image: string,
    @Body('description') description: string,
    @Body('nbConso') nbConso: number,
  ): Promise<Events> {
    const event = new Events();
    event.id = id;
    event.name = nom;
    event.price = price;
    event.image = image;
    event.description = description;
    event.nbConso = nbConso;
    await event.save();
    return event;
  } 
  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');
        const extension: string = path.parse(file.originalname).ext;
        cb(null, `${filename}${extension}`)
      }
    })
  }))
  upload(@UploadedFile() file): Observable<Object> {
    return of({ imagePath: file.filename });
  }

  @Get(':id')
  getPersonne(@Param('id') id: string) {
    return this.eventsService.getEvent(id);
  }

  @Patch(':id')
  updateClient(
    @Param('id') id: string,
    @Body() event: Events
  ): Promise<Events> {
    return this.eventsService.updateEvent(id, event);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.eventsService.deleteEvent(id);
  }

}

