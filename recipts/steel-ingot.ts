import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const SteelIngot: Recipt = {
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

export const CokeSteelIngout: Recipt = {
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

export const CompactedSteelIngot: Recipt = {
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

export const SolidSteelIngot: Recipt = {
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

export const SteelIngotRecipts = [SteelIngot, CokeSteelIngout, CompactedSteelIngot, SolidSteelIngot];
