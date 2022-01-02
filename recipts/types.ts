import { Item } from '../items';
import { Building } from '../buildings';

export interface ItemCount {
    item: Item,
    count: number,
}

export interface Recipt {
    input: ItemCount[],
    output: ItemCount[],

    /**
     * time in seconds
     */
    time: number,

    /**
     * recipt done in building
     */
    building: Building,
}
