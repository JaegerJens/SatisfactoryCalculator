import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Silica: Recipe = {
    input: [{
        item: Item.RawQuartz,
        count: 3,
    }],
    output: [{
        item: Item.Silica,
        count: 5,
    }],
    building: Building.Constructor,
    time: 8,
};

export const CheapSilica: Recipe = {
    input: [{
        item: Item.RawQuartz,
        count: 3,
    }, {
        item: Item.Limestone,
        count: 5,
    }],
    output: [{
        item: Item.Silica,
        count: 7,
    }],
    building: Building.Assembler,
    time: 16,
}