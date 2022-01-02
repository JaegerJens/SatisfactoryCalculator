import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const CopperIngot: Recipt = {
    input: [{
        item: Item.CopperOre,
        count: 1,
    }],
    output: [{
        item: Item.CopperIngot,
        count: 1,
    }],
    building: Building.Smelter,
    time: 2,
}

export const CopperAlloyIngot: Recipt = {
    input: [{
        item: Item.CopperOre,
        count: 10,
    }, {
        item: Item.IronOre,
        count: 5,
    }],
    output: [{
        item: Item.CopperIngot,
        count: 20,
    }],
    building: Building.Foundry,
    time: 12,
}

export const PureCopperIngot: Recipt = {
    input: [{
        item: Item.CopperOre,
        count: 6,
    }, {
        item: Item.Water,
        count: 4,
    }],
    output: [{
        item: Item.CopperIngot,
        count: 15,
    }],
    building: Building.Refinery,
    time: 24,
}

export const CopperIngotRecipts = [CopperIngot, CopperAlloyIngot, PureCopperIngot];
