import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beers } from './beers.entity';
import { Repository, Like } from 'typeorm';
import { CreateBeerDto } from './dto/create-beer.dto';

@Injectable()
export class BeersService {
    constructor(
        @InjectRepository(Beers)
        private beersRepository: Repository<Beers>,
    ){}

    async getAll(){
        const res = await this.beersRepository.find();
        console.log('res is :', res);
        return res;
    }

    async getById(id: number): Promise<Beers> {
        const res = await this.beersRepository.findOneBy({ id: id });
        console.log('get by id');
        if (!res) {
          throw new NotFoundException(`beer with id ${id} could not be found`);
        }
        return res;
      }
    
    async getByName(beerName: string): Promise<Beers[]> {
        console.log(beerName)
        const res = await this.beersRepository.findBy({
          name : Like(`%${beerName}%`),
        });
        console.log('res is :', res);
        if (!res) {
          throw new NotFoundException(`beer with name ${beerName} could not be found`);
        }
        return res;
    }

    async getRandom(){
        const res = await this.beersRepository.find();
        console.log('res is :', res);
        return res;
    }

    async createBeerDto(createBeerDto: CreateBeerDto): Promise<Beers> {
        const { id, name, created, description, img_optimized, img_original, alcohol, beer_type, beer_type_family, beer_type_family_color, star_1, star_2, star_3, star_4, star_5, avg_rating, first_avg_rating, brewery, country} = createBeerDto;
    
        const beer = new Beers();
        beer.id = id;
        beer.name = name;
        beer.created = created;
        beer.description = description;
        beer.img_optimized = img_optimized;
        beer.img_original = img_original;
        beer.alcohol = alcohol;
        beer.beer_type = beer_type;
        beer.beer_type_family = beer_type_family;
        beer.beer_type_family_color = beer_type_family_color;
        beer.star_1 = star_1;
        beer.star_2 = star_2;
        beer.star_3 = star_3;
        beer.star_4 = star_4;
        beer.star_5 = star_5;
        beer.avg_rating = avg_rating;
        beer.first_avg_rating = first_avg_rating;
        beer.brewery = brewery;
        beer.country = country;
        
        await beer.save();
    
        return beer;
      }
}
