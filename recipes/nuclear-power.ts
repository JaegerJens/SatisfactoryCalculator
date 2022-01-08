import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const UraniumPower: Recipe = {
    input: [{
        item: Item.UraniumFuelRod,
        count: 1,
    }, {
        item: Item.Water,
        count: 1500,
    }],
    output: [{
        item: Item.UraniumWaste,
        count: 50,
    }],
    building: Building.NuclearPowerPlant,
    time: 300,
}

export const PlutoniumPower: Recipe = {
    input: [{
        item: Item.PlutoniumFuelRod,
        count: 1,
    }, {
        item: Item.Water,
        count: 3000,
    }],
    output: [{
        item: Item.PlutoniumWaste,
        count: 10,
    }],
    building: Building.NuclearPowerPlant,
    time: 600,
}
