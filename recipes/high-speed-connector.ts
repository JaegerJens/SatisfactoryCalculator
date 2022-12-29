import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const HighSpeedConnector: Recipe = {
    input: [{
        item: Item.Quickwire,
        count: 56,
    }, {
        item: Item.Cable,
        count: 10,
    }, {
        item: Item.CircuitBoard,
        count: 1,
    }],
    output: [{
        item: Item.HighSpeedConnector,
        count: 1,
    }],
    building: Building.Manufacturer,
    time: 16,
};

export const SiliconHighSpeedConnector: Recipe = {
    input: [{
        item: Item.Quickwire,
        count: 60,
    }, {
        item: Item.Silica,
        count: 25,
    }, {
        item: Item.CircuitBoard,
        count: 2,
    }],
    output: [{
        item: Item.HighSpeedConnector,
        count: 2,
    }],
    building: Building.Manufacturer,
    time: 40,
};
