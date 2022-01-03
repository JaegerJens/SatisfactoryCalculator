import { Item } from '../items';
import { Building } from '../buildings';

export interface ItemCount {
    item: Item,
    count: number,
}

export interface Recipe {
    input: ItemCount[],
    output: ItemCount[],

    /**
     * time in seconds
     */
    time: number,

    /**
     * Recipe done in building
     */
    building: Building,
}
