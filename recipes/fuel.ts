import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from './types.ts';

export const Fuel: Recipe = {
    input: [{
        item: Item.CrudeOil,
        count: 6,
    }],
    output: [{
        item: Item.Fuel,
        count: 4,
    }, {
        item: Item.PolymerResin,
        count: 3,
    }],
    building: Building.Refinery,
    time: 6,
}

export const ResidualFuel: Recipe = {
    input: [{
        item: Item.HeavyOilResidue,
        count: 6,
    }],
    output: [{
        item: Item.Fuel,
        count: 4,
    }],
    building: Building.Refinery,
    time: 6,
}

export const DilutedFuel: Recipe = {
    input: [{
        item: Item.HeavyOilResidue,
        count: 5,
    }, {
        item: Item.Water,
        count: 10,
    }],
    output: [{
        item: Item.Fuel,
        count: 10,
    }],
    building: Building.Blender,
    time: 10,
}

export const FuelRecipes = [Fuel, ResidualFuel, DilutedFuel];
