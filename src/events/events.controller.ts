import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Patch, Delete, Res } from '@nestjs/common';
import { EventsService } from './events.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Events } from './events.entity';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import * as path from 'path';
import { join } from 'path';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService){}
    @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createConnexion(
    @Body('id') id: string,
    @Body('name') nom: string,
    @Body('date') date: Date,
    @Body('start_time') start_time: string,
    @Body('end_time') end_time: string,
    @Body('place') place: string,
    @Body('price') price: Record<string, number[]>,
    @Body('image_name') image_name: string,
    @Body('video_name') video_name: string,
    @Body('capacity') capacity: number,
    @Body('description') description: string,
    @Body('address') address: string,
    @Body('geo') geo: string[],
    @Body('music') music: string[]
  ): Promise<Events> {
    const event = new Events();
    event.id = id;
    event.name = nom;
    event.price = price;
    event.capacity = capacity;
    event.date = date;
    event.start_time = start_time;
    event.end_time = end_time;
    event.image_name = image_name;
    event.video_name = video_name;
    event.description = description;
    event.place = place;
    event.address = address;
    event.geo = geo;
    event.music = music;
    await event.save();
    return event;
  } 
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
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
    return of({ filePath: file.filename });
  }

  @Get(':id')
  getPersonne(@Param('id') id: string):Promise<Events> {
    return this.eventsService.getEvent(id);
  }

  @Get('total/tout')
  getTout(){
    return this.eventsService.getTout();
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

  @Get('photo/:imagename')
  async getImage(@Param('imagename') imageName: string, @Res() res): Promise<any> {
    try {
      const imagePath = join(process.cwd(), 'upload', imageName);
      return res.sendFile(imagePath);
    } catch (error) {
      return res.status(404).json({ error: 'Image not found' });
    }
  }

}

