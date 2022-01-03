import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

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