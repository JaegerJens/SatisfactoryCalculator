import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const SteelBeam: Recipe = {
    input: [{
        item: Item.SteelIngot,
        count: 4,
    }],
    output: [{
        item: Item.SteelBeam,
        count: 1,
    }],
    building: Building.Constructor,
    time: 4,
}