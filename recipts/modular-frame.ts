import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

export const ModularFrame: Recipe = {
    input: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }, {
        item: Item.IronRod,
        count: 12,
    }],
    output: [{
        item: Item.ModularFrame,
        count: 2,
    }],
    building: Building.Assembler,
    time: 60,
}

export const BoltedFrame: Recipe = {
    input: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }, {
        item: Item.Screw,
        count: 56,
    }],
    output: [{
        item: Item.ModularFrame,
        count: 2,
    }],
    building: Building.Assembler,
    time: 24,
}

export const SteeledFrame: Recipe = {
    input: [{
        item: Item.ReinforcedIronPlate,
        count: 2,
    }, {
        item: Item.SteelPipe,
        count: 10,
    }],
    output: [{
        item: Item.ModularFrame,
        count: 3,
    }],
    building: Building.Assembler,
    time: 60,
}

export const ModularFrameRecipes = [ModularFrame, BoltedFrame, SteeledFrame];
