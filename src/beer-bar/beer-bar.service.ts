import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';
import { Repository } from 'typeorm';
import { Bar } from './beer-bar.entity';


@Injectable()
export class BarService {
    constructor(
    @InjectRepository(Bar)
        private readonly ConnexionRepository : Repository<Bar>
    ){}

    async Get_Bar() {
        //recup toute la base 
        const bar=await this.ConnexionRepository.find()
        //récup seulement le nom des bars
        const namebar = bar.map(name => name.Bar_name)
        return namebar
       
    }

    async Get_BarJSON(bar_name) {
        const bar=await this.ConnexionRepository.query(`SELECT Beer_JSON FROM beer_bar WHERE Bar_name ="`+ bar_name + `";`);
        console.log(`SELECT Beer_JSON FROM beer_bar WHERE Bar_name ="`+ bar_name + `";`);
        return bar
    }

    async Get_ALLBAR() {
        const bar=await this.ConnexionRepository.find();
        return bar
    }

    async getBarBeer(): Promise<string[]> {
             const bar = await this.ConnexionRepository
         .createQueryBuilder('beer_bar')
         .select("Beer_JSON->'$.beer_name'", 'beer_name')
         .getRawMany();
         return bar.map((item) => item.beer_name);   
    }
    
    async get_Bar_from_Beer_file(beer_name,indexbeer,bar_in_radius,bar_in_tabbar) {
        const bar=await this.ConnexionRepository.query(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[`+ indexbeer +`]'="`+ beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "` + bar_in_tabbar +`";`);
        console.log(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[`+ indexbeer +`]'="`+ beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "` + bar_in_tabbar +`";`);
        return bar
    }

    async get_Bar_from_Beer_file_empty(beer_name,indexbeer,bar_in_radius) {
        const bar=await this.ConnexionRepository.query(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[`+ indexbeer +`]'="`+ beer_name + `" AND Bar_name = "` + bar_in_radius + `";`);
        console.log(`SELECT Bar_name FROM beer_bar WHERE Beer_JSON->'$.beer_name[`+ indexbeer +`]'="`+ beer_name + `" AND Bar_name = "` + bar_in_radius + `" AND Bar_name != "";`);
        return bar
    }

    async get_Price_from_Beer_file(bar_name,indexJSON){
        const bar=await this.ConnexionRepository.query(`SELECT Beer_JSON->'$.price[`+ indexJSON +`]' FROM beer_bar WHERE Bar_name = "`+ bar_name +`";`);
        console.log(`SELECT Beer_JSON->'$.price' FROM beer_bar WHERE Bar_name ="`+ bar_name + `";`);
        return bar
    }
}
