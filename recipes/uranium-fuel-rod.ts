import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const UraniumFuelRod: Recipe = {
    input: [{
        item: Item.EncasedUraniumCell,
        count: 50,
    }, {
        item: Item.EncasedIndustrialBeam,
        count: 3,
    }, {
        item: Item.ElectromagneticControlRod,
        count: 5,
    }],
    output: [{
        item: Item.UraniumFuelRod,
        count: 1,
    }],
    building: Building.Manufacturer,
    time: 150,
}

export const UraniumFuelUnit: Recipe = {
    input: [{
        item: Item.EncasedUraniumCell,
        count: 50,
    }, {
        item: Item.ElectromagneticControlRod,
        count: 5,
    }, {
        item: Item.CrystalOscilator,
        count: 3,
    }, {
        item: Item.Beacon,
        count: 6,
    }],
    output: [{
        item: Item.UraniumFuelRod,
        count: 3,
    }],
    building: Building.Manufacturer,
    time: 300,
}

export const UraniumFuelRodRecipes = [UraniumFuelRod, UraniumFuelUnit];