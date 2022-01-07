import { Item } from "../items.ts";
import { Building } from "../buildings.ts";
import { Recipe } from "../types.ts";

export enum Purity {
    Impure,
    Normal,
    Pure,
}

function buildRecipe(item: Item, count: number, building: Building): Recipe {
    return {
        input: [],
        output: [{
            item,
            count,
        }],
        time: 60,
        building,
    }
}

function purityFactor(purity: Purity): number {
    switch (purity) {
        case Purity.Impure: return 1;
        case Purity.Normal: return 2;
        case Purity.Pure: return 4;
    }
}

function buildingFactor(building: Building): number {
    if (building === Building.MinerMk1) {
        return 1;
    }
    if (building === Building.MinerMk2) {
        return 2;
    }
    if (building === Building.MinerMk3) {
        return 4;
    }
    return 0;
}

export function source(item: Item, building: Building, purity: Purity): Recipe | undefined {
    switch (item) {
        case Item.IronOre:
        case Item.CopperOre:
        case Item.Coal:
            return buildRecipe(item, 30 * purityFactor(purity) * buildingFactor(building), building);
        case Item.CrudeOil:
            return buildRecipe(item, 60 * purityFactor(purity), Building.OilExtractor);
        case Item.Water:
            return buildRecipe(item, 120, Building.WaterExtractor);
        default:
            return undefined;
    }
}