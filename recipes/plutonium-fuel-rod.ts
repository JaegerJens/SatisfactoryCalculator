import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const PlutoniumFuelRod: Recipe = {
    input: [{
        item: Item.EncasedPlutoniumCell,
        count: 30,
    }, {
        item: Item.SteelBeam,
        count: 30,
    }, {
        item: Item.ElectromagneticControlRod,
        count: 6,
    }, {
        item: Item.HeatSink,
        count: 10,
    }],
    output: [{
        item: Item.PlutoniumFuelRod,
        count: 1,
    }],
    building: Building.Manufacturer,
    time: 240,
}

export const PlutoniumFuelUnit: Recipe = {
    input: [{
        item: Item.EncasedPlutoniumCell,
        count: 30,
    }, {
        item: Item.PressureConversionCube,
        count: 1,
    }],
    output: [{
        item: Item.PlutoniumFuelRod,
        count: 1,
    }],
    building: Building.Assembler,
    time: 120,
}

export const PlutoniumFuelRodRecipes = [PlutoniumFuelRod, PlutoniumFuelUnit];
