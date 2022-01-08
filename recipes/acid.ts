import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const SulfuricAcid: Recipe = {
    input: [{
        item: Item.Sulfur,
        count: 5,
    }, {
        item: Item.Water,
        count: 5,
    }],
    output: [{
        item: Item.SulfuricAcid,
        count: 5,
    }],
    building: Building.Refinery,
    time: 6,
}

export const NitricAcid: Recipe = {
    input: [{
        item: Item.NitrogenGas,
        count: 12,
    }, {
        item: Item.Water,
        count: 3,
    }],
    output: [{
        item: Item.NitricAcid,
        count: 3,
    }],
    building: Building.Blender,
    time: 6,
}
