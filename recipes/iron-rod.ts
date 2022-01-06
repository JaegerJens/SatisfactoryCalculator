import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const IronRod: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 1,
    }],
    output: [{
        item: Item.IronRod,
        count: 1,
    }],
    building: Building.Constructor,
    time: 4,
}

export const SteelRod: Recipe = {
    input: [{
        item: Item.SteelIngot,
        count: 1,
    }],
    output: [{
        item: Item.IronRod,
        count: 4,
    }],
    building: Building.Constructor,
    time: 5,
}

export const IronRodRecipes = [IronRod, SteelRod];
