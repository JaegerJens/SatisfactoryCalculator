import { Building } from "../buildings.ts";
import { Item } from "../items.ts";
import { planFactory } from "../plan-factory.ts";
import { Production } from "../production.ts";
import { PureCateriumIngot } from "../recipes/caterium-ingot.ts";
import { SiliconCiruitBoard } from "../recipes/circuit-board.ts";
import { PureCopperIngot } from "../recipes/copper-ingot.ts";
import { SteamedCopperSheet } from "../recipes/copper-sheet.ts";
import { SiliconHighSpeedConnector } from "../recipes/high-speed-connector.ts";
import { source, useBasicRecipes } from "../recipes/index.ts";
import { Purity } from "../recipes/item-source.ts";
import { FusedQuickwire } from "../recipes/quickwire.ts";
import { Silica } from "../recipes/silica.ts";
import { SelectRecipe } from "../types.ts";

const highSpeedConnector = new Production(SiliconHighSpeedConnector, 16);

const connectorRecipe: SelectRecipe = item => {
    switch(item) {
        case Item.CopperIngot: return PureCopperIngot;
        case Item.CopperSheet: return SteamedCopperSheet;
        case Item.CateriumIngot: return PureCateriumIngot;
        case Item.Quickwire: return FusedQuickwire;
        case Item.Silica: return Silica;
        case Item.CircuitBoard: return SiliconCiruitBoard;
        case Item.HighSpeedConnector: return SiliconHighSpeedConnector;
        case Item.CopperOre:
        case Item.RawQuartz:
        case Item.Limestone:
        case Item.CateriumOre:
            return source(item, Building.MinerMk3, Purity.Normal);
        default: return useBasicRecipes(item);
    }
}

export const highSpeedConnectorFactory = planFactory([highSpeedConnector], connectorRecipe);
