import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const EncasedIndustrialBeam: Recipe = {
    input: [{
        item: Item.SteelBeam,
        count: 4,
    }, {
        item: Item.Concrete,
        count: 5,
    }],
    output: [{
        item: Item.EncasedIndustrialBeam,
        count: 1,
    }],
    building: Building.Assembler,
    time: 10,
}

export const EncasedIndustrialPipe: Recipe = {
    input: [{
        item: Item.SteelPipe,
        count: 7,
    }, {
        item: Item.Concrete,
        count: 5,
    }],
    output: [{
        item: Item.EncasedIndustrialBeam,
        count: 1,
    }],
    building: Building.Assembler,
    time: 15,
}

export const EncasedIndustrialBeamRecipes = [EncasedIndustrialBeam, EncasedIndustrialPipe];
