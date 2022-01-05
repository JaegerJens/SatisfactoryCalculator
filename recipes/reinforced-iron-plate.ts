import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from './types.ts';

export const ReinforcedIronPlate: Recipe = {
    input: [{
        item: Item.IronPlate,
        count: 6,
    }, {
        item: Item.Screw,
        count: 12,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}

export const AdheredIronPlate: Recipe = {
    input: [{
        item: Item.IronPlate,
        count: 3,
    }, {
        item: Item.Rubber,
        count: 1,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 1,
    }],
    building: Building.Assembler,
    time: 16,
}

export const BoltedIronPlate: Recipe = {
    input: [{
        item: Item.IronPlate,
        count: 18,
    }, {
        item: Item.Screw,
        count: 50,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }],
    building: Building.Assembler,
    time: 12,
}

export const StitchedIronPlate: Recipe = {
    input: [{
        item: Item.IronPlate,
        count: 10,
    }, {
        item: Item.Wire,
        count: 20,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }],
    building: Building.Assembler,
    time: 32,
}

export const ReinforcedIronPlateRecipes = [ReinforcedIronPlate, AdheredIronPlate, BoltedIronPlate, StitchedIronPlate];