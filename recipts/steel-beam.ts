import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

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