import { Building } from "../buildings.ts";
import { Item } from "../items.ts";
import { planFactory } from "../plan-factory.ts";
import { Production } from "../production.ts";
import { EncasedIndustrialPipe } from "../recipes/encased-industrial-beam.ts";
import { HeavyEncasedFrame } from "../recipes/heavy-modular-frame.ts";
import { useBasicRecipes } from "../recipes/index.ts";
import { PureIronIngot } from "../recipes/iron-ingot.ts";
import { Purity } from "../recipes/item-source.ts";
import { source } from "../recipes/item-source.ts";
import { SteeledFrame } from "../recipes/modular-frame.ts";
import { StitchedIronPlate } from "../recipes/reinforced-iron-plate.ts";
import { SolidSteelIngot } from "../recipes/steel-ingot.ts";
import { IronWire } from "../recipes/wire.ts";
import { SelectRecipe } from "../types.ts";

const heavyModularFrame = new Production(HeavyEncasedFrame, 6);

const heavyModularFrameRecipes: SelectRecipe = item => {
    switch(item) {
        case Item.ModularFrame: return SteeledFrame;
        case Item.ReinforcedIronPlate: return StitchedIronPlate;
        case Item.EncasedIndustrialBeam: return EncasedIndustrialPipe;
        case Item.Wire: return IronWire;
        case Item.SteelIngot: return SolidSteelIngot;
        case Item.IronIngot: return PureIronIngot;
        case Item.IronOre: return source(item, Building.MinerMk3, Purity.Normal);
        case Item.Coal: return source(item, Building.MinerMk3, Purity.Normal);
        case Item.Limestone: return source(item, Building.MinerMk3, Purity.Normal);
        default: return useBasicRecipes(item);
    }
};

export const heavyModularFrameFactory = planFactory([heavyModularFrame], heavyModularFrameRecipes);