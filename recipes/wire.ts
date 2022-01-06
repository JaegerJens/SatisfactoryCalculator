import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Wire: Recipe = {
    input: [{
        item: Item.CopperIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 2,
    }],
    building: Building.Constructor,
    time: 4,
}

export const FusedWire: Recipe = {
    input: [{
        item: Item.CopperIngot,
        count: 4,
    }, {
        item: Item.CateriumIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 30,
    }],
    building: Building.Assembler,
    time: 20,
}

export const IronWire: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 5,
    }],
    output: [{
        item: Item.Wire,
        count: 9,
    }],
    building: Building.Constructor,
    time: 24,
}

export const CateriumWire: Recipe = {
    input: [{
        item: Item.CateriumIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 8,
    }],
    building: Building.Constructor,
    time: 4,
}

export const WireRecipes = [Wire, FusedWire, IronWire, CateriumWire];
