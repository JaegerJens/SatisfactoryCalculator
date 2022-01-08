import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const ElectromagneticControlRod: Recipe = {
    input: [{
        item: Item.Stator,
        count: 3,
    }, {
        item: Item.AILimiter,
        count: 2,
    }],
    output: [{
        item: Item.ElectromagneticControlRod,
        count: 2,
    }],
    building: Building.Assembler,
    time: 30,
}

export const ElectromagneticConnectionRod: Recipe = {
    input: [{
        item: Item.Stator,
        count: 2,
    }, {
        item: Item.HighSpeedConnector,
        count: 1,
    }],
    output: [{
        item: Item.ElectromagneticControlRod,
        count: 2,
    }],
    building: Building.Assembler,
    time: 15,
}

export const ElectromagneticControlRodRecipes = [ElectromagneticControlRod, ElectromagneticConnectionRod];
