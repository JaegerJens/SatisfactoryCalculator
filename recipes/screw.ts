import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from './types.ts';

export const Screw: Recipe = {
    input: [{
        item: Item.IronRod,
        count: 1,
    }],
    output: [{
        item: Item.Screw,
        count: 4,
    }],
    building: Building.Constructor,
    time: 6,
}

export const CastScrew: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 5,
    }],
    output: [{
        item: Item.Screw,
        count: 20,
    }],
    building: Building.Constructor,
    time: 24,
}

export const SteelScrew: Recipe = {
    input: [{
        item: Item.SteelBeam,
        count: 1,
    }],
    output: [{
        item: Item.Screw,
        count: 52,
    }],
    building: Building.Constructor,
    time: 12,
}

export const ScrewRecipes = [Screw, CastScrew, SteelScrew];
