import { Item } from "./items.ts";
import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { PureIronIngot } from "./recipes/iron-ingot.ts";
import { SolidSteelIngot } from "./recipes/steel-ingot.ts";
import { SelectRecipe } from "./types.ts";

const target = new Production(SolidSteelIngot, 36);

const steelFactory: SelectRecipe = item => {
    switch (item) {
        case Item.SteelIngot: return SolidSteelIngot;
        case Item.IronIngot: return PureIronIngot;
    }

}

const factory = planFactory(target, steelFactory);

console.log(factory.map(prod => prod.toString()).join('\n'));
