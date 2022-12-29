import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const CircuitBoard: Recipe = {
    input: [{
        item: Item.CopperSheet,
        count: 2,
    }, {
        item: Item.Plastic,
        count: 4,
    }],
    output: [{
        item: Item.CircuitBoard,
        count: 1,
    }],
    building: Building.Assembler,
    time: 8,
};

export const ElectrodeCircuitBoard: Recipe = {
    input: [{
        item: Item.Rubber,
        count: 6,
    }, {
        item: Item.PetroleumCoke,
        count: 9,
    }],
    output: [{
        item: Item.CircuitBoard,
        count: 1
    }],
    building: Building.Assembler,
    time: 12,
};

export const SiliconCiruitBoard: Recipe = {
    input: [{
        item: Item.CopperSheet,
        count: 11,
    }, {
        item: Item.Silica,
        count: 11,
    }],
    output: [{
        item: Item.CircuitBoard,
        count: 5,
    }],
    building: Building.Assembler,
    time: 24,
};

export const CateriumCircuitBoard: Recipe = {
    input: [{
        item: Item.Plastic,
        count: 10,
    }, {
        item: Item.Quickwire,
        count: 30,
    }],
    output: [{
        item: Item.CircuitBoard,
        count: 7,
    }],
    building: Building.Assembler,
    time: 48,
};
