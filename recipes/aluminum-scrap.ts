import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const AluminumScrap: Recipe = {
    input: [{
        item: Item.AluminaSolution,
        count: 4,
    }, {
        item: Item.Coal,
        count: 2,
    }],
    output: [{
        item: Item.AluminumScrap,
        count: 6,
    }, {
        item: Item.Water,
        count: 2,
    }],
    building: Building.Refinery,
    time: 1,
};

export const ElectrodeAluminumScrap: Recipe = {
    input: [{
        item: Item.AluminaSolution,
        count: 12,
    }, {
        item: Item.PetroleumCoke,
        count: 4,
    }],
    output: [{
        item: Item.AluminumScrap,
        count: 20,
    }, {
        item: Item.Water,
        count: 7,
    }],
    building: Building.Refinery,
    time: 4,
};

export const InstantScrap: Recipe = {
    input: [{
        item: Item.Bauxite,
        count: 15,
    }, {
        item: Item.Coal,
        count: 10,
    }, {
        item: Item.SulfuricAcid,
        count: 5,
    }, {
        item: Item.Water,
        count: 6,
    }],
    output: [{
        item: Item.AluminumScrap,
        count: 30,
    }, {
        item: Item.Water,
        count: 5,
    }],
    building: Building.Blender,
    time: 6,
};

export const AluminumScrapRecipes = [AluminumScrap, ElectrodeAluminumScrap, InstantScrap];