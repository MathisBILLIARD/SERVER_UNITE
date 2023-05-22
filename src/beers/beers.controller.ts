import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Beers } from './beers.model';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto'


@Controller('beers')
export class BeersController {
    constructor(private beersService: BeersService){}

    @Get()
    getAllBeers(){
        console.log('get all');
        return this.beersService.getAll();
    }

    @Get('findById/:id')
    getBeerById(@Param('id') id: number): Promise<Beers> {
      return this.beersService.getById(id);
    }

    @Get('findByName/:beerName')
    getBeersByName(@Param('beerName') beerName : string,): Promise<Beers[]>{
      return this.beersService.getByName(beerName);
    }

    @Get('random')
    getRandomBeer(){
      return this.beersService.getRandom();
    }

    @Post('dto')
    createAnnonceDto(
        @Body() createBeerDto: CreateBeerDto,
      ): Promise<Beers> {
        return this.beersService.createBeerDto(createBeerDto);
      }

    @Delete()
    deleteBeer() {
      return 'deleted';
    }
  
    @Patch()
    updateBeer() {
      return 'updated';
    }
}
