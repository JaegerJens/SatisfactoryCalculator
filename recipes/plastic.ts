import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Plastic: Recipe = {
    input: [{
        item: Item.CrudeOil,
        count: 3,
    }],
    output: [{
        item: Item.Plastic,
        count: 2,
    }, {
        item: Item.HeavyOilResidue,
        count: 1,
    }],
    building: Building.Refinery,
    time: 6,
}

export const ResidualPlastic: Recipe = {
    input: [{
        item: Item.PolymerResin,
        count: 6,
    }, {
        item: Item.Water,
        count: 2,
    }],
    output: [{
        item: Item.Plastic,
        count: 2,
    }],
    building: Building.Refinery,
    time: 6,
}

export const RecycledPlastic: Recipe = {
    input: [{
        item: Item.Rubber,
        count: 6,
    }, {
        item: Item.Fuel,
        count: 6,
    }],
    output: [{
        item: Item.Plastic,
        count: 12,
    }],
    building: Building.Refinery,
    time: 12,
}

export const PlasticRecipes = [Plastic, ResidualPlastic, RecycledPlastic];
