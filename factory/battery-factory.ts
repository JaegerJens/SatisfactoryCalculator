import { Building } from "../buildings.ts";
import { Item } from "../items.ts";
import { planFactory } from "../plan-factory.ts";
import { Production } from "../production.ts";
import { SloppyAlumina } from "../recipes/alumina-solution.ts";
import { PureAluminumIngot } from "../recipes/aluminum-ingot.ts";
import { Battery } from "../recipes/battery.ts";
import { Purity, source, useBasicRecipes } from "../recipes/index.ts";
import { SelectRecipe } from "../types.ts";

const battery = new Production(Battery, 10);

const batteryRecipe: SelectRecipe = item => {
    switch (item) {
        case Item.AluminumIngot: return PureAluminumIngot;
        case Item.AluminaSolution: return SloppyAlumina;
        case Item.Sulfur:
        case Item.Bauxite:
        case Item.Coal:
            return source(item, Building.MinerMk3, Purity.Normal);
        default: return useBasicRecipes(item);
    }
}

export const batteryFactory = planFactory([battery], batteryRecipe);