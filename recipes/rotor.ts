import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Rotor: Recipe = {
    input: [{
        item: Item.IronRod,
        count: 5,
    }, {
        item: Item.Screw,
        count: 25,
    }],
    output: [{
        item: Item.Rotor,
        count: 1,
    }],
    building: Building.Assembler,
    time: 15,
}

export const CopperRotor: Recipe = {
    input: [{
        item: Item.CopperSheet,
        count: 6,
    }, {
        item: Item.Screw,
        count: 52,
    }],
    output: [{
        item: Item.Rotor,
        count: 3,
    }],
    building: Building.Assembler,
    time: 16,
}

export const SteelRotor: Recipe = {
    input: [{
        item: Item.SteelPipe,
        count: 2,
    }, {
        item: Item.Wire,
        count: 30,
    }],
    output: [{
        item: Item.Rotor,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}

export const RotorRecipes = [Rotor, CopperRotor, SteelRotor];
