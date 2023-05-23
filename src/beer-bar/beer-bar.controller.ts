import { Controller, Get, Param } from '@nestjs/common';
import { BarService } from './beer-bar.service';

@Controller('beer-bar')
export class BeerBarController {
    constructor(private barService: BarService){}
  @Get(':longitude/:latitude/:radius')
  async getApi(@Param('longitude') longitude: string, @Param('latitude') latitude: string, @Param('radius') radius: Number,) {
    try {
      console.log('test');
      const address = '';
      const apiKey = 'AIzaSyDuBnAv5wHr7Pi1Lxrd9CBRPIy76IS8cxk';
      
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

@Get('/Bar_beer/:beer_name/:indexbeer/beer/:bar_in_radius/:bar_in_tabbar')   
async getBarfromBeer(@Param('beer_name') beer_name: string,@Param('indexbeer') indexbeer: string,@Param('bar_in_radius') bar_in_radius: string,@Param('bar_in_tabbar') bar_in_tabbar: string){
  return this.barService.get_Bar_from_Beer_file(beer_name,indexbeer,bar_in_radius,bar_in_tabbar);   
}

@Get('/Bar_beer/:beer_name/:indexbeer/beer/:bar_in_radius')   
async getBarfromBeers(@Param('beer_name') beer_name: string,@Param('indexbeer') indexbeer: string,@Param('bar_in_radius') bar_in_radius: string){
  return this.barService.get_Bar_from_Beer_file_empty(beer_name,indexbeer,bar_in_radius);   
}

@Get('/Price/get/:bar_name/test/:indexJSON/test2')   
async getfrPriceomBeer(@Param('bar_name') bar_name: string,@Param('indexJSON') indexJSON: string){
  return this.barService.get_Price_from_Beer_file(bar_name,indexJSON);   
}
}
