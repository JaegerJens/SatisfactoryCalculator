import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const AluminumCasing: Recipe = {
    input: [{
        item: Item.AluminumIngot,
        count: 3,
    }],
    output: [{
        item: Item.AluminumCasing,
        count: 2,
    }],
    building: Building.Constructor,
    time: 2,
};

export const AlcladCasing: Recipe = {
    input: [{
        item: Item.AluminumIngot,
        count: 20,
    }, {
        item: Item.CopperIngot,
        count: 10,
    }],
    output: [{
        item: Item.AluminumCasing,
        count: 15,
    }],
    building: Building.Assembler,
    time: 8,
};

export const AluminumCasingRecipes = [AluminumCasing, AlcladCasing];