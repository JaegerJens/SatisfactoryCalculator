import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const CopperSheet: Recipt = {
    input: [{
        item: Item.CopperIngot,
        count: 2,
    }],
    output: [{
        item: Item.CopperSheet,
        count: 1,
    }],
    building: Building.Constructor,
    time: 6,
}

export const SteamedCopperSheet: Recipt = {
    input: [{
        item: Item.CopperIngot,
        count: 3,
    }, {
        item: Item.Water,
        count: 3,
    }],
    output: [{
        item: Item.CopperSheet,
        count: 3,
    }],
    building: Building.Refinery,
    time: 8,
}

export const CopperSheetRecipts = [CopperSheet, SteamedCopperSheet];
