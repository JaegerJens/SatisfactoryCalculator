import { Item } from '../items';
import { Building } from '../buildings';
import { Recipt } from './types';

export const IronPlate: Recipt = {
    input: [{
        item: Item.IronIngot,
        count: 3,
    }],
    output: [{
        item: Item.IronPlate,
        count: 2,
    }],
    building: Building.Constructor,
    time: 6,
}

export const CoatedIronPlate: Recipt = {
    input: [{
        item: Item.IronIngot,
        count: 10,
    }, {
        item: Item.Plastic,
        count: 2,
    }],
    output: [{
        item: Item.IronPlate,
        count: 15,
    }],
    building: Building.Assembler,
    time: 12,
}

export const SteelIronPlate: Recipt = {
    input: [{
        item: Item.SteelIngot,
        count: 3,
    }, {
        item: Item.Plastic,
        count: 2,
    }],
    output: [{
        item: Item.IronPlate,
        count: 18,
    }],
    building: Building.Assembler,
    time: 24,
}

export const IronPlateRecipts = [IronPlate, CoatedIronPlate, SteelIronPlate];
