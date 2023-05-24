import { Beers } from './beers.model';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto';
export declare class BeersController {
    private beersService;
    constructor(beersService: BeersService);
    getAllBeers(): Promise<import("./beers.entity").Beers[]>;
    getBeerById(id: number): Promise<Beers>;
    getBeersByName(beerName: string): Promise<Beers[]>;
    getRandomBeer(): Promise<import("./beers.entity").Beers>;
    createAnnonceDto(createBeerDto: CreateBeerDto): Promise<Beers>;
    deleteBeer(): string;
    updateBeer(): string;
}
