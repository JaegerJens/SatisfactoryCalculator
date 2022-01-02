import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const Cable: Recipt = {
    input: [{
        item: Item.Wire,
        count: 2,
    }],
    output: [{
        item: Item.Cable,
        count: 1,
    }],
    building: Building.Constructor,
    time: 2,
}

export const CoatedCable: Recipt = {
    input: [{
        item: Item.Wire,
        count: 5,
    }, {
        item: Item.HeavyOilResidue,
        count: 2,
    }],
    output: [{
        item: Item.Cable,
        count: 9,
    }],
    building: Building.Refinery,
    time: 8,
}

export const InsulatedCable: Recipt = {
    input: [{
        item: Item.Wire,
        count: 9,
    }, {
        item: Item.Rubber,
        count: 6,
    }],
    output: [{
        item: Item.Cable,
        count: 20,
    }],
    building: Building.Assembler,
    time: 12,
}

export const QuickwireCable: Recipt = {
    input: [{
        item: Item.Quickwire,
        count: 3,
    }, {
        item: Item.Rubber,
        count: 2,
    }],
    output: [{
        item: Item.Cable,
        count: 11,
    }],
    building: Building.Assembler,
    time: 24,
}

export const CableRecipts = [Cable, CoatedCable, InsulatedCable, QuickwireCable];
