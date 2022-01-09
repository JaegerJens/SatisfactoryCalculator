import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const AILimiter: Recipe = {
    input: [{
        item: Item.CopperSheet,
        count: 5,
    }, {
        item: Item.Quickwire,
        count: 20,
    }],
    output: [{
        item: Item.AILimiter,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}