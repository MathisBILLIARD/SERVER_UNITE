import { BarService } from './beer-bar.service';
export declare class BeerBarController {
    private barService;
    constructor(barService: BarService);
    getApi(longitude: string, latitude: string, radius: Number): Promise<string>;
    getBarjson(bar_name: string): Promise<any>;
    getBarfromBeer(beer_name: string, indexbeer: string, bar_in_radius: string, bar_in_tabbar: string): Promise<any>;
    getBarfromBeers(beer_name: string, indexbeer: string, bar_in_radius: string): Promise<any>;
    getfrPriceomBeer(bar_name: string, indexJSON: string): Promise<any>;
}
