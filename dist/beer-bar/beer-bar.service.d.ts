import { Repository } from 'typeorm';
import { Bar } from './beer-bar.entity';
export declare class BarService {
    private readonly ConnexionRepository;
    constructor(ConnexionRepository: Repository<Bar>);
    Get_Bar(): Promise<string[]>;
    Get_BarJSON(bar_name: any): Promise<any>;
    Get_ALLBAR(): Promise<Bar[]>;
    getBarBeer(): Promise<string[]>;
    get_Bar_from_Beer_file(beer_name: any, indexbeer: any, bar_in_radius: any, bar_in_tabbar: any): Promise<any>;
    get_Bar_from_Beer_file_empty(beer_name: any, indexbeer: any, bar_in_radius: any): Promise<any>;
    get_Price_from_Beer_file(bar_name: any, indexJSON: any): Promise<any>;
}
