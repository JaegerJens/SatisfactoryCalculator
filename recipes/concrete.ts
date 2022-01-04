import { Item } from '../items';
import { Building } from '../buildings';
import { Recipe } from './types';

export const Concrete: Recipe = {
    input: [{
        item: Item.Limestone,
        count: 3,
    }],
    output: [{
        item: Item.Concrete,
        count: 1,
    }],
    building: Building.Constructor,
    time: 4,
}

export const RubberConcrete: Recipe = {
    input: [{
        item: Item.Limestone,
        count: 10,
    }, {
        item: Item.Rubber,
        count: 2,
    }],
    output: [{
        item: Item.Concrete,
        count: 9,
    }],
    building: Building.Assembler,
    time: 12,
}

export const WetConcrete: Recipe = {
    input: [{
        item: Item.Limestone,
        count: 6,
    }, {
        item: Item.Water,
        count: 5,
    }],
    output: [{
        item: Item.Concrete,
        count: 4,
    }],
    building: Building.Refinery,
    time: 3,
}

export const FineConcrete: Recipe = {
    input: [{
        item: Item.Limestone,
        count: 12,
    }, {
        item: Item.Silica,
        count: 3,
    }],
    output: [{
        item: Item.Concrete,
        count: 10,
    }],
    building: Building.Assembler,
    time: 10,
}

export const ConcreteRecipes = [Concrete, RubberConcrete, WetConcrete, FineConcrete];
