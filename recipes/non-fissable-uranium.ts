import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const NonFissableUranium: Recipe = {
    input: [{
        item: Item.UraniumWaste,
        count: 15,
    }, {
        item: Item.Silica,
        count: 10,
    }, {
        item: Item.NitricAcid,
        count: 15,
    }, {
        item: Item.SulfuricAcid,
        count: 15,
    }],
    output: [{
        item: Item.NonFissableUranium,
        count: 20,
    }, {
        item: Item.Water,
        count: 6,
    }],
    building: Building.Blender,
    time: 24,
}

export const FertileUranium: Recipe = {
    input: [{
        item: Item.Uranium,
        count: 5,
    }, {
        item: Item.UraniumWaste,
        count: 5,
    }, {
        item: Item.NitricAcid,
        count: 15,
    }, {
        item: Item.SulfuricAcid,
        count: 25,
    }],
    output: [{
        item: Item.NonFissableUranium,
        count: 20,
    }, {
        item: Item.Water,
        count: 8,
    }],
    building: Building.Blender,
    time: 12,
}

export const NonFissableUraniumRecipes = [NonFissableUranium, FertileUranium];
