import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const Wire: Recipt = {
    input: [{
        item: Item.CopperIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 2,
    }],
    building: Building.Constructor,
    time: 4,
}

export const FusedWire: Recipt = {
    input: [{
        item: Item.CopperIngot,
        count: 4,
    }, {
        item: Item.CateriumIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 30,
    }],
    building: Building.Assembler,
    time: 20,
}

export const IronWire: Recipt = {
    input: [{
        item: Item.IronIngot,
        count: 5,
    }],
    output: [{
        item: Item.Wire,
        count: 9,
    }],
    building: Building.Constructor,
    time: 24,
}

export const CateriumWire: Recipt = {
    input: [{
        item: Item.CateriumIngot,
        count: 1,
    }],
    output: [{
        item: Item.Wire,
        count: 8,
    }],
    building: Building.Constructor,
    time: 4,
}

export const WireRecipts = [Wire, FusedWire, IronWire, CateriumWire];
