import { Controller, Get, Param, Res} from '@nestjs/common';
import { BarService } from './beer-bar.service';
import { Response } from 'express'

@Controller('beer-bar')
export class BeerBarController {
    constructor(private barService: BarService){}
  @Get(':longitude/:latitude/:radius')
  async getApi(@Param('longitude') longitude: string, @Param('latitude') latitude: string, @Param('radius') radius: Number,) {
    try {
      console.log('test');
      const address = '';
      const apiKey = 'AIzaSyAwgwIUxnAAEo8t8Vc6t3gqxchMzDv5abg';
      
      const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${longitude},${latitude}&radius=${radius}&keyword=bar&key=${apiKey}&Atmosphere=serves_beer`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Traitez les données de réponse ici
      console.log(data);
  
      return JSON.stringify(data);
    } catch (error) {
      // Traitez les erreurs ici
      console.error(error);
      return JSON.stringify({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
}

@Get('/barjson/:bar_name')
async getBarjson(@Param('bar_name') bar_name: string){
  return this.barService.Get_BarJSON(bar_name)
}

@Get('/Bar_beer/:beer_name/:indexbeer/beer/:bar_in_radius/:bar_in_tabbar')   
async getBarfromBeer(@Param('beer_name') beer_name: string,@Param('indexbeer') indexbeer: string,@Param('bar_in_radius') bar_in_radius: string,@Param('bar_in_tabbar') bar_in_tabbar: string){
  return this.barService.get_Bar_from_Beer_file(beer_name,indexbeer,bar_in_radius,bar_in_tabbar);   
}

@Get('/Bar_beer/:beer_name/:indexbeer/beer/ash1/ash2/:bar_in_radius')   
async getBarfromBeers(@Param('beer_name') beer_name: string,@Param('indexbeer') indexbeer: string,@Param('bar_in_radius') bar_in_radius: string){
  return this.barService.get_Bar_from_Beer_file_empty(beer_name,indexbeer,bar_in_radius);   
}

@Get('/Price/get/:bar_name/test/:indexJSON/test2')   
async getfrPriceomBeer(@Param('bar_name') bar_name: string,@Param('indexJSON') indexJSON: string){
  return this.barService.get_Price_from_Beer_file(bar_name,indexJSON);   
}

@Get(':photo_reference/bar_image')

  async getPhoto(@Param('photo_reference') photo_reference: string, @Res() res: Response) {

    try {

      const apiKey = 'AIzaSyDuBnAv5wHr7Pi1Lxrd9CBRPIy76IS8cxk';//AIzaSyDuBnAv5wHr7Pi1Lxrd9CBRPIy76IS8cxk

      const apiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=${apiKey}`;




      const response = await fetch(apiUrl);

      console.log("TEMAAAAAAAAAAAAAA LIMAGE")

      console.log(response)




      const data = await response.blob();

      console.log(data)




      const buffer = await data.arrayBuffer();

      const imageData = Buffer.from(buffer);




      res.setHeader('Content-Type', 'image/png');

      res.send(imageData);




      //return data;




    } catch (error) {

      // Traitez les erreurs ici

      console.error(error);

      return JSON.stringify({ error: "Une erreur s'est produite lors de la récupération des données." });

    }

  }
}
