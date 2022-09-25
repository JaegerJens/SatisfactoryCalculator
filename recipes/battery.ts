import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const Battery: Recipe = {
    input: [{
        item: Item.SulfuricAcid,
        count: 2.5,
    }, {
        item: Item.AluminaSolution,
        count: 2,
    }, {
        item: Item.AluminumCasing,
        count: 1
    }],
    output: [{
        item: Item.Battery,
        count: 1,
    }, {
        item: Item.Water,
        count: 1.5,
    }],
    building: Building.Blender,
    time: 3,
}

export const ClassicBattery: Recipe = {
    input: [{
        item: Item.Sulfur,
        count: 6,
    }, {
        item: Item.AlcladAluminumSheet,
        count: 7,
    }, {
        item: Item.Plastic,
        count: 8.
    }, {
        item: Item.Wire,
        count: 12.
    }],
    output: [{
        item: Item.Battery,
        count: 4,
    }],
    building: Building.Blender,
    time: 8,
}

export const BatteryRecipes = [Battery, ClassicBattery];