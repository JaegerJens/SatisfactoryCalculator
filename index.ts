import { Building } from "./buildings.ts";
import { Item } from "./items.ts";
import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { Purity, source } from "./recipes/index.ts";
import { PureIronIngot } from "./recipes/iron-ingot.ts";
import { SolidSteelIngot } from "./recipes/steel-ingot.ts";
import { SelectRecipe } from "./types.ts";

const target = new Production(SolidSteelIngot, 36);

const steelFactory: SelectRecipe = item => {
    switch (item) {
        case Item.SteelIngot: return SolidSteelIngot;
        case Item.IronIngot: return PureIronIngot;
        case Item.IronOre: return source(item, Building.MinerMk3, Purity.Pure);
        case Item.Coal: return source(item, Building.MinerMk3, Purity.Pure);
        case Item.Water: return source(item, Building.WaterExtractor, Purity.Impure);
    }
}

const factory = planFactory(target, steelFactory);

console.log(factory.map(prod => prod.toString()).join('\n'));
