import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

export const IronIngot: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 1,
    }],
    output: [{
        item: Item.IronIngot,
        count: 1,
    }],
    building: Building.Smelter,
    time: 2,
}

export const PureIronIngot: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 7,
    }, {
        item: Item.Water,
        count: 4,
    }],
    output: [{
        item: Item.IronIngot,
        count: 13,
    }],
    building: Building.Refinery,
    time: 12,
}

export const IronAlloyIngot: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 2,
    }, {
        item: Item.CopperOre,
        count: 2,
    }],
    output: [{
        item: Item.IronIngot,
        count: 5,
    }],
    building: Building.Foundry,
    time: 6,
}

export const IronIngotRecipes = [IronIngot, PureIronIngot, IronAlloyIngot];
