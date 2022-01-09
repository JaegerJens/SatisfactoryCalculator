import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Quickwire: Recipe = {
    input: [{
        item: Item.CateriumIngot,
        count: 1,
    }],
    output: [{
        item: Item.Quickwire,
        count: 5,
    }],
    building: Building.Constructor,
    time: 5,
}

export const FusedQuickwire: Recipe = {
    input: [{
        item: Item.CateriumIngot,
        count: 1,
    }, {
        item: Item.CopperIngot,
        count: 5,
    }],
    output: [{
        item: Item.Quickwire,
        count: 12,
    }],
    building: Building.Assembler,
    time: 8,
}

export const QuickwireRecipes = [Quickwire, FusedQuickwire];
