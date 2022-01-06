import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const IronPlate: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 3,
    }],
    output: [{
        item: Item.IronPlate,
        count: 2,
    }],
    building: Building.Constructor,
    time: 6,
}

export const CoatedIronPlate: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 10,
    }, {
        item: Item.Plastic,
        count: 2,
    }],
    output: [{
        item: Item.IronPlate,
        count: 15,
    }],
    building: Building.Assembler,
    time: 12,
}

export const SteelIronPlate: Recipe = {
    input: [{
        item: Item.SteelIngot,
        count: 3,
    }, {
        item: Item.Plastic,
        count: 2,
    }],
    output: [{
        item: Item.IronPlate,
        count: 18,
    }],
    building: Building.Assembler,
    time: 24,
}

export const IronPlateRecipes = [IronPlate, CoatedIronPlate, SteelIronPlate];
