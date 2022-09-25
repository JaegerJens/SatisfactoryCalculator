import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const AluminumIngot: Recipe = {
    input: [{
        item: Item.AluminumScrap,
        count: 6,
    }, {
        item: Item.Silica,
        count: 5,
    }],
    output: [{
        item: Item.AluminumIngot,
        count: 4,
    }],
    building: Building.Assembler,
    time: 4,
};

export const PureAluminumIngot: Recipe = {
    input: [{
        item: Item.AluminumScrap,
        count: 2,
    }],
    output: [{
        item: Item.AluminumIngot,
        count: 1,
    }],
    building: Building.Smelter,
    time: 2,
};

export const AluminumIngotRecipes = [AluminumIngot, PureAluminumIngot];