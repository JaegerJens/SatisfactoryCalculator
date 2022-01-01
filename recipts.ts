import { Item } from './items';
import { Building } from './buildings';

export interface ItemCount {
    item: Item,
    count: number,
}

export interface Recipt {
    input: ItemCount[],
    output: ItemCount[],

    /**
     * time in seconds
     */
    time: number,

    /**
     * recipt done in building
     */
    building: Building,
}

export const IronIngot: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 1,
    }],
    output: [{
        item: Item.IronIngot,
        count: 1,
    }],
    building: Building.Smelter,
    time: 2,
}

export const PureIronIngot: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 7,
    }, {
        item: Item.Water,
        count: 4,
    }],
    output: [{
        item: Item.IronIngot,
        count: 13,
    }],
    building: Building.Refinery,
    time: 12,
}

export const IronAlloyIngot: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 2,
    }, {
        item: Item.CopperOre,
        count: 2,
    }],
    output: [{
        item: Item.IronIngot,
        count: 5,
    }],
    building: Building.Foundry,
    time: 6,
}

export const IronIngotRecipts = [IronIngot, PureIronIngot, IronAlloyIngot];


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


export const SteelIngot: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 3,
    }, {
        item: Item.Coal,
        count: 3,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 3,
    }],
    building: Building.Foundry,
    time: 4,
}

export const CokeSteelIngout: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 15,
    }, {
        item: Item.PetroleumCoke,
        count: 15,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 20,
    }],
    building: Building.Foundry,
    time: 12,
}

export const CompactedSteelIngot: Recipt = {
    input: [{
        item: Item.IronOre,
        count: 6,
    }, {
        item: Item.CompactedCoal,
        count: 3,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 10,
    }],
    building: Building.Foundry,
    time: 16,
}

export const SolidSteelIngot: Recipt = {
    input: [{
        item: Item.IronIngot,
        count: 2,
    }, {
        item: Item.Coal,
        count: 2,
    }],
    output: [{
        item: Item.SteelIngot,
        count: 3,
    }],
    building: Building.Foundry,
    time: 3,
}

export const SteelIngotRecipts = [SteelIngot, CokeSteelIngout, CompactedSteelIngot, SolidSteelIngot];
