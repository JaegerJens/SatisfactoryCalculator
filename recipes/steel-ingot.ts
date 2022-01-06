import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const SteelIngot: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 3,
    }, {
        item: Item.Coal,
        count: 3,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 3,
    }],
    building: Building.Foundry,
    time: 4,
}

export const CokeSteelIngout: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 15,
    }, {
        item: Item.PetroleumCoke,
        count: 15,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 20,
    }],
    building: Building.Foundry,
    time: 12,
}

export const CompactedSteelIngot: Recipe = {
    input: [{
        item: Item.IronOre,
        count: 6,
    }, {
        item: Item.CompactedCoal,
        count: 3,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 10,
    }],
    building: Building.Foundry,
    time: 16,
}

export const SolidSteelIngot: Recipe = {
    input: [{
        item: Item.IronIngot,
        count: 2,
    }, {
        item: Item.Coal,
        count: 2,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 3,
    }],
    building: Building.Foundry,
    time: 3,
}

export const SteelIngotRecipes = [SteelIngot, CokeSteelIngout, CompactedSteelIngot, SolidSteelIngot];
