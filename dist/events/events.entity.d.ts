import { BaseEntity } from 'typeorm';
export declare class Events extends BaseEntity {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    nbConso: number;
}
