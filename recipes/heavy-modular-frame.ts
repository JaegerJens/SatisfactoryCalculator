import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const HeavyModularFrame: Recipe = {
    input: [{
        item: Item.ModularFrame,
        count: 5,
    }, {
        item: Item.SteelPipe,
        count: 15,
    }, {
        item: Item.EncasedIndustrialBeam,
        count: 5,
    }, {
        item: Item.Screw,
        count: 100,
    }],
    output: [{
        item: Item.HeavyModularFrame,
        count: 1,
    }],
    building: Building.Manufacturer,
    time: 30,
};

export const HeavyFlexibleFrame: Recipe = {
    input: [{
        item: Item.ModularFrame,
        count: 5,
    }, {
        item: Item.EncasedIndustrialBeam,
        count: 3,
    }, {
        item: Item.Rubber,
        count: 20,
    }, {
        item: Item.Screw,
        count: 100,
    }],
    output: [{
        item: Item.HeavyModularFrame,
        count: 1,
    }],
    building: Building.Manufacturer,
    time: 16,
};

export const HeavyEncasedFrame: Recipe = {
    input: [{
        item: Item.ModularFrame,
        count: 8,
    }, {
        item: Item.EncasedIndustrialBeam,
        count: 10,
    }, {
        item: Item.SteelPipe,
        count: 36,
    }, {
        item: Item.Concrete,
        count: 22,
    }],
    output: [{
        item: Item.HeavyModularFrame,
        count: 3,
    }],
    building: Building.Manufacturer,
    time: 64,
};
