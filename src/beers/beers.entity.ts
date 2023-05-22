import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('beers')
export class Beers extends BaseEntity{
    @PrimaryColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    created: string;
    @Column()
    description: string;
    @Column()
    img_optimized: string;
    @Column()
    img_original: string;
    @Column()
    alcohol: number;
    @Column()
    beer_type: string;
    @Column()
    beer_type_family: string;
    @Column()
    beer_type_family_color: string;
    @Column()
    star_1: number;
    @Column()
    star_2: number;
    @Column()
    star_3: number;
    @Column()
    star_4: number;
    @Column()
    star_5: number;
    @Column()
    avg_rating: number;
    @Column()
    first_avg_rating: number;
    @Column()
    brewery: string;
    @Column()
    country: string;
}