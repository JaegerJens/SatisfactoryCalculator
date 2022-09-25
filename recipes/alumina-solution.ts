import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const AluminaSolution: Recipe = {
    input: [{
        item: Item.Bauxite,
        count: 12,
    }, {
        item: Item.Water,
        count: 18,
    }],
    output: [{
        item: Item.AluminaSolution,
        count: 12
    }, {
        item: Item.Silica,
        count: 5,
    }],
    building: Building.Refinery,
    time: 6,
}

export const UnpackageAluminaSolution: Recipe = {
    input: [{
        item: Item.PackagedAluminaSolution,
        count: 2,
    }],
    output: [{
        item: Item.AluminaSolution,
        count: 2,
    }, {
        item: Item.EmptyCanister,
        count: 2,
    }],
    building: Building.Packager,
    time: 1,
}

export const SloppyAlumina: Recipe = {
    input: [{
        item: Item.Bauxite,
        count: 10,
    }, {
        item: Item.Water,
        count: 10,
    }],
    output: [{
        item: Item.AluminaSolution,
        count: 12,
    }],
    building: Building.Refinery,
    time: 3
}

export const AluminaSolutionRecipes = [AluminaSolution, UnpackageAluminaSolution, SloppyAlumina];