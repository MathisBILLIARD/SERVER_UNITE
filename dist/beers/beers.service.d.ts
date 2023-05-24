import { Beers } from './beers.entity';
import { Repository } from 'typeorm';
import { CreateBeerDto } from './dto/create-beer.dto';
export declare class BeersService {
    private beersRepository;
    constructor(beersRepository: Repository<Beers>);
    getAll(): Promise<Beers[]>;
    getById(id: number): Promise<Beers>;
    getByName(beerName: string): Promise<Beers[]>;
    getRandom(): Promise<Beers>;
    createBeerDto(createBeerDto: CreateBeerDto): Promise<Beers>;
}
