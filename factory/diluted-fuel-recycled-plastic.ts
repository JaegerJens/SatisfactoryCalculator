import { Building } from "../buildings.ts";
import { Item } from "../items.ts";
import { planFactory } from "../plan-factory.ts";
import { Production } from "../production.ts";
import { DilutedFuel } from "../recipes/fuel.ts";
import { Purity, source } from "../recipes/index.ts";
import { PolymerResin } from "../recipes/oil-intermediate.ts";
import { RecycledPlastic } from "../recipes/plastic.ts";
import { ResidualRubber } from "../recipes/rubber.ts";
import { SelectRecipe } from "../types.ts";

const plastic = new Production(RecycledPlastic, 10);

const plasticWithDilutedFuel: SelectRecipe = item => {
    switch (item) {
        case Item.Water:
            return source(Item.Water, Building.WaterExtractor, Purity.Impure);
        case Item.CrudeOil:
            return source(Item.CrudeOil, Building.OilExtractor, Purity.Normal);
        case Item.Fuel:
            return DilutedFuel;
        case Item.HeavyOilResidue:
        case Item.PolymerResin:
            return PolymerResin;
        case Item.Rubber:
            return ResidualRubber;
        case Item.Plastic:
            return RecycledPlastic;
        default:
            return undefined;
    }
}

export const recycledPlasticFactory = planFactory([plastic], plasticWithDilutedFuel);
