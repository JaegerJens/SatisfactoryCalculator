import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const SteelPipe: Recipe = {
    input: [{
        item: Item.SteelIngot,
        count: 3,
    }],
    output: [{
        item: Item.SteelPipe,
        count: 2,
    }],
    building: Building.Constructor,
    time: 6,
}