import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const CateriumIngot: Recipe = {
    input: [{
        item: Item.CateriumOre,
        count: 3,
    }],
    output: [{
        item: Item.CateriumIngot,
        count: 1,
    }],
    building: Building.Smelter,
    time: 4,
}

export const PureCateriumIngot: Recipe = {
    input: [{
        item: Item.CateriumOre,
        count: 2,
    }, {
        item: Item.Water,
        count: 2,
    }],
    output: [{
        item: Item.CateriumIngot,
        count: 1,
    }],
    building: Building.Refinery,
    time: 5,
}

export const CateriumIngotRecipes = [CateriumIngot, PureCateriumIngot];
