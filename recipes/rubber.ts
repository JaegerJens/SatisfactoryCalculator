import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

export const Rubber: Recipe = {
    input: [{
        item: Item.CrudeOil,
        count: 3,
    }],
    output: [{
        item: Item.Rubber,
        count: 2,
    }, {
        item: Item.HeavyOilResidue,
        count: 2,
    }],
    building: Building.Refinery,
    time: 6,
}

export const ResidualRubber: Recipe = {
    input: [{
        item: Item.PolymerResin,
        count: 4,
    }, {
        item: Item.Water,
        count: 4,
    }],
    output: [{
        item: Item.Rubber,
        count: 2,
    }],
    building: Building.Refinery,
    time: 6,
}

export const RecycledRubber: Recipe = {
    input: [{
        item: Item.Plastic,
        count: 6,
    }, {
        item: Item.Fuel,
        count: 6,
    }],
    output: [{
        item: Item.Rubber,
        count: 12,
    }],
    building: Building.Refinery,
    time: 12,
}

export const RubberRecipes = [Rubber, ResidualRubber, RecycledRubber];
