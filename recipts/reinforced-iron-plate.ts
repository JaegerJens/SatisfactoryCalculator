import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const ReinforcedIronPlate: Recipt = {
    input: [{
        item: Item.IronPlate,
        count: 6,
    }, {
        item: Item.Screw,
        count: 12,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}

export const AdheredIronPlate: Recipt = {
    input: [{
        item: Item.IronPlate,
        count: 3,
    }, {
        item: Item.Rubber,
        count: 1,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 1,
    }],
    building: Building.Assembler,
    time: 16,
}

export const BoltedIronPlate: Recipt = {
    input: [{
        item: Item.IronPlate,
        count: 18,
    }, {
        item: Item.Screw,
        count: 50,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }],
    building: Building.Assembler,
    time: 12,
}

export const StitchedIronPlate: Recipt = {
    input: [{
        item: Item.IronPlate,
        count: 10,
    }, {
        item: Item.Wire,
        count: 20,
    }],
    output: [{
        item: Item.ReinforcedIronPlate,
        count: 3,
    }],
    building: Building.Assembler,
    time: 32,
}

export const ReinforcedIronPlateRecipts = [ReinforcedIronPlate, AdheredIronPlate, BoltedIronPlate, StitchedIronPlate];