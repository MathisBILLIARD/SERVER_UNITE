import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Patch, Delete, Res } from '@nestjs/common';
import { ConnexionService } from './connexion.service';
import { Connexion } from './connexion.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { join } from 'path';
import { Response } from 'express';


@Controller('connexion')
export class ConnexionController {
  constructor(private connexionService: ConnexionService) { }

  @Get('/nom')
  getPrenom() {
    console.log('Requête GET /nom reçue');
    return this.connexionService.getPrenom();

  }

  @Get('/email')
  getEmail() {
    console.log('Requête GET /email reçue');
    return this.connexionService.getEmail();
  }

  @Get('/code')
  getCode(){
    return this.connexionService.getCode(); 
  }

  @Get('/pass')
  getMdp() {
    console.log('Requête GET /pass reçue');
    return this.connexionService.getMdp();
  }

  @Get('party/:email')
  getParty(@Param('email') email: string){
    return this.connexionService.getParty(email);
  }

  @Get('client/party/:party_id')
  getUsersByParty(@Param('party_id') party_id: string):Promise<Connexion[]>{
    return this.connexionService.getUserByParty(party_id);
  }

  @Get(':email')
  getPersonne(@Param('email') email: string) {
    return this.connexionService.getPersonne(email);
  }
  @Get('client/:code')
  getPersonneCode(@Param('code') code: string){
    return this.connexionService.getPersonneCode(code);
  }


  @Patch(':id')
  updateClient(
    @Param('id') id: string,
    @Body() client: Connexion
  ): Promise<Connexion> {
    return this.connexionService.update(id, client);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.connexionService.deleteClient(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createConnexion(
    @Body('id') id: string,
    @Body('firstname') prenom: string,
    @Body('name') nom: string,
    @Body('email') email: string,
    @Body('password') mdp: string,
    @Body('phonenumber') phonenumber: string,
    @Body('referralcode') referralcode: string,
    @Body('numberParrainage') numberParrainage: number,
    @Body('party_id') party_id: string[]
  ): Promise<Connexion> {
    const connec = new Connexion();
    connec.id = id;
    connec.firstname = prenom;
    connec.name = nom;
    connec.email = email;
    connec.password = mdp;
    connec.phonenumber = phonenumber;
    connec.referralcode = referralcode;
    connec.numberParrainage = numberParrainage;
    connec.party_id = party_id
    await connec.save();
    return connec;
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
}
