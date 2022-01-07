import { Building } from "./buildings.ts";
import { Item } from "./items.ts";
import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { Purity, source } from "./recipes/index.ts";
import { PureIronIngot } from "./recipes/iron-ingot.ts";
import { SteelBeam } from "./recipes/steel-beam.ts";
import { SolidSteelIngot } from "./recipes/steel-ingot.ts";
import { SteelPipe } from "./recipes/steel-pipe.ts";
import { SelectRecipe } from "./types.ts";


console.log('Steel Ingot Factory');
const steelIngotTarget = new Production(SolidSteelIngot, 35.75);
const steelIngotRecpies: SelectRecipe = item => {
    switch (item) {
        case Item.SteelIngot: return SolidSteelIngot;
        case Item.IronIngot: return PureIronIngot;
        case Item.IronOre: return source(item, Building.MinerMk3, Purity.Pure);
        case Item.Coal: return source(item, Building.MinerMk3, Purity.Normal);
        case Item.Water: return source(item, Building.WaterExtractor, Purity.Impure);
    }
}
const steelIngotFactory = planFactory([steelIngotTarget], steelIngotRecpies);
console.log(steelIngotFactory.map(prod => prod.toString()).join('\n'));


console.log('Steel Factory');
const steelRecipes: SelectRecipe = item => {
    switch (item) {
        case Item.SteelBeam: return SteelBeam;
        case Item.SteelPipe: return SteelPipe;
    }
};

const steelTargets = [
    new Production(SteelBeam, 25.75),
    new Production(SteelPipe, 20),
]
const steelFactory = planFactory(steelTargets, steelRecipes);
console.log(steelFactory.map(prod => prod.toString()).join('\n'));