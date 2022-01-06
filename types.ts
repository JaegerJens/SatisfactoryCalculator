import { Item } from './items.ts';
import { Building } from './buildings.ts';

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

export type SelectRecipe = (output: Item) => Recipe | undefined;
