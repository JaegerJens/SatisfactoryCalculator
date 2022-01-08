import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const EncasedPlutoniumCell: Recipe = {
    input: [{
        item: Item.PlutoniumPellet,
        count: 2,
    }, {
        item: Item.Concrete,
        count: 4,
    }],
    output: [{
        item: Item.EncasedPlutoniumCell,
        count: 1,
    }],
    building: Building.Assembler,
    time: 12,
}

export const InstantPlutoniumCell: Recipe = {
    input: [{
        item: Item.NonFissableUranium,
        count: 150,
    }, {
        item: Item.AluminumCasing,
        count: 20,
    }],
    output: [{
        item: Item.EncasedPlutoniumCell,
        count: 1,
    }],
    building: Building.ParticleAccelerator,
    time: 120,
}

export const EncasedPlutoniumCellRecipes = [EncasedPlutoniumCell, InstantPlutoniumCell];
