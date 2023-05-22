import { Controller,Get, Post, Body, Param, UseInterceptors, UploadedFile, Patch, Delete, Res } from '@nestjs/common';
import { ConnexionService } from './connexion.service';
import { Connexion } from './connexion.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';
import { diskStorage } from 'multer';
import{v4 as uuidv4} from 'uuid';
import { Observable, of } from 'rxjs';
import { join } from 'path';

@Controller('connexion')
export class ConnexionController {
    constructor(private connexionService:ConnexionService){}

    @Get('/nom')
    getPrenom(){
        return this.connexionService.getPrenom();
    }

    @Get('/email')
    getEmail(){
        return this.connexionService.getEmail();
    }

    @Get('/pass')
    getMdp(){
        return this.connexionService.getMdp();
    }

    @Get(':email')
    getPersonne(@Param('email') email: string) {
        return this.connexionService.getPersonne(email);
    }
    
    @Patch(':id')
    updateClient(
      @Param('id') id: string,
      @Body() client: Connexion
    ): Promise<Connexion> {
      return this.connexionService.update(id, client);
    }

    @Delete(':id')
    deleteClient(@Param('id') id: string){
      return this.connexionService.deleteClient(id);
    }

    @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createConnexion(
    @Body('id') id: string,
    @Body('prenom') prenom: string,
    @Body('nom') nom: string,
    @Body('email') email: string,
    @Body('mdp') mdp: string,
  ): Promise<Connexion> {
    const connec = new Connexion();
    connec.id = id;
    connec.prenom = prenom;
    connec.nom = nom;
    connec.email = email;
    connec.mdp = mdp;
    await connec.save();
    return connec;
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g,'');
        const extension: string = path.parse(file.originalname).ext;
        cb(null, `${filename}${extension}`)
      }
    })
  }))
  upload(@UploadedFile() file): Observable<Object> {
    return of({imagePath: file.filename});
  }

  @Get('biere/:id')
  async getBiere(@Param('id') id: string){
    return this.connexionService.getBiere(id);
  }

  // controller.ts
@Patch('biere/:id/:beerId')
async postBeer(@Param('id') id: string, @Param('beerId') beerId: string, @Body() client: Connexion): Promise<Connexion> {
  return this.connexionService.postBeer(id, beerId, client);
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
