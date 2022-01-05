import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from './types.ts';

export const PolymerResin: Recipe = {
    input: [{
        item: Item.CrudeOil,
        count: 6,
    }],
    output: [{
        item: Item.PolymerResin,
        count: 13,
    }, {
        item: Item.HeavyOilResidue,
        count: 2,
    }],
    building: Building.Refinery,
    time: 6,
}

export const HeavyOilResiude: Recipe = {
    input: [{
        item: Item.CrudeOil,
        count: 3,
    }],
    output: [{
        item: Item.PolymerResin,
        count: 2,
    }, {
        item: Item.HeavyOilResidue,
        count: 4,
    }],
    building: Building.Refinery,
    time: 6,
}
