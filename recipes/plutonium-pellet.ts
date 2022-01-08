import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const PlutoniumPellet: Recipe = {
    input: [{
        item: Item.NonFissableUranium,
        count: 100,
    }, {
        item: Item.UraniumWaste,
        count: 25,
    }],
    output: [{
        item: Item.PlutoniumPellet,
        count: 30,
    }],
    building: Building.ParticleAccelerator,
    time: 60,
}