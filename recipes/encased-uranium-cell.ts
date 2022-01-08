import { Item } from '../items.ts';
import { Building } from '../buildings.ts';
import { Recipe } from '../types.ts';

export const EncasedUraniumCell: Recipe = {
    input: [{
        item: Item.Uranium,
        count: 10,
    }, {
        item: Item.Concrete,
        count: 3,
    }, {
        item: Item.SulfuricAcid,
        count: 8,
    }],
    output: [{
        item: Item.EncasedUraniumCell,
        count: 5,
    }, {
        item: Item.SulfuricAcid,
        count: 2,
    }],
    building: Building.Blender,
    time: 12,
}

export const InfusedUraniumCell: Recipe = {
    input: [{
        item: Item.Uranium,
        count: 5,
    }, {
        item: Item.Silica,
        count: 3,
    }, {
        item: Item.Sulfur,
        count: 25,
    }, {
        item: Item.Quickwire,
        count: 15,
    }],
    output: [{
        item: Item.EncasedUraniumCell,
        count: 4,
    }],
    building: Building.Manufacturer,
    time: 12,
}

export const EncasedUraniumCellRecipes = [EncasedUraniumCell, InfusedUraniumCell];