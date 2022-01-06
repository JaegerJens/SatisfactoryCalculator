import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const CopperSheet: Recipe = {
    input: [{
        item: Item.CopperIngot,
        count: 2,
    }],
    output: [{
        item: Item.CopperSheet,
        count: 1,
    }],
    building: Building.Constructor,
    time: 6,
}

export const SteamedCopperSheet: Recipe = {
    input: [{
        item: Item.CopperIngot,
        count: 3,
    }, {
        item: Item.Water,
        count: 3,
    }],
    output: [{
        item: Item.CopperSheet,
        count: 3,
    }],
    building: Building.Refinery,
    time: 8,
}

export const CopperSheetRecipes = [CopperSheet, SteamedCopperSheet];
