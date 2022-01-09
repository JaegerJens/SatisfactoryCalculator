import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Stator: Recipe = {
    input: [{
        item: Item.SteelPipe,
        count: 3,
    }, {
        item: Item.Wire,
        count: 8,
    }],
    output: [{
        item: Item.Stator,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}

export const QuickwireStator: Recipe = {
    input: [{
        item: Item.SteelPipe,
        count: 4,
    }, {
        item: Item.Quickwire,
        count: 15,
    }],
    output: [{
        item: Item.Stator,
        count: 2,
    }],
    building: Building.Assembler,
    time: 15,
}

export const StatorRecipes = [Stator, QuickwireStator];
