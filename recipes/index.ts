import { SelectRecipe } from "../types.ts";
import { selectItem } from "../select-item.ts";
import { Item } from "../items.ts";
import { source, Purity } from "./item-source.ts";
import { Building } from "../buildings.ts";

import { IronIngotRecipes } from './iron-ingot.ts';
import { IronPlateRecipes } from './iron-plate.ts';
import { IronRodRecipes } from './iron-rod.ts';
import { ScrewRecipes } from './screw.ts';
import { ReinforcedIronPlateRecipes } from './reinforced-iron-plate.ts';
import { RotorRecipes } from './rotor.ts';
import { StatorRecipes } from "./stator.ts";

import { ConcreteRecipes } from './concrete.ts';

import { CopperIngotRecipes } from './copper-ingot.ts';
import { CopperSheetRecipes } from './copper-sheet.ts';
import { WireRecipes } from './wire.ts';
import { CableRecipes } from './cable.ts';

import { SteelIngotRecipes } from './steel-ingot.ts';
import { SteelPipe } from './steel-pipe.ts';
import { SteelBeam } from './steel-beam.ts';
import { EncasedIndustrialBeamRecipes } from './encased-industrial-beam.ts';

import { ModularFrameRecipes } from './modular-frame.ts';

import { PlasticRecipes } from './plastic.ts';
import { RubberRecipes } from './rubber.ts';
import { FuelRecipes } from './fuel.ts';
import { PolymerResin, HeavyOilResidue } from './oil-intermediate.ts';

import { NitricAcid, SulfuricAcid } from "./acid.ts";
import { CateriumIngotRecipes } from "./caterium-ingot.ts";
import { QuickwireRecipes } from "./quickwire.ts";
import { AILimiter } from "./ai-limiter.ts";
import { ElectromagneticControlRodRecipes } from "./electromagnetic-control-rod.ts";
import { EncasedUraniumCellRecipes } from './encased-uranium-cell.ts';
import { UraniumFuelRodRecipes } from './uranium-fuel-rod.ts';
import { NonFissableUraniumRecipes } from './non-fissable-uranium.ts';
import { PlutoniumPellet } from './plutonium-pellet.ts';
import { EncasedPlutoniumCellRecipes } from './encased-plutonium-cell.ts';
import { PlutoniumFuelRodRecipes } from './plutonium-fuel-rod.ts';

export const book = {
    IronIngotRecipes,
    IronPlateRecipes,
    IronRodRecipes,
    ScrewRecipes,
    ReinforcedIronPlateRecipes,
    RotorRecipes,
    StatorRecipes,
    ConcreteRecipes,
    CopperIngotRecipes,
    CopperSheetRecipes,
    WireRecipes,
    CableRecipes,
    SteelIngotRecipes,
    SteelPipeRecipes: [SteelPipe],
    SteelBeamRecipes: [SteelBeam],
    EncasedIndustrialBeamRecipes,
    ModularFrameRecipes,
    PlasticRecipes,
    RubberRecipes,
    FuelRecipes,
    PolymerResinRecipes: [PolymerResin],
    HeavyOilResidueRecipes: [HeavyOilResidue],
    CateriumIngotRecipes,
    QuickwireRecipes,
    AILimiterRecipes: [AILimiter],
    ElectromagneticControlRodRecipes: ElectromagneticControlRodRecipes,
    SulfuricAcidRecipes: [SulfuricAcid],
    NitricAcidRecipes: [NitricAcid],
    EncasedUraniumCellRecipes,
    UraniumFuelRodRecipes,
    NonFissableUraniumRecipes,
    PlutoniumPelletRecipes: [PlutoniumPellet],
    EncasedPlutoniumCellRecipes,
    PlutoniumFuelRodRecipes,
}

export { source, Purity };

export const safeRecipe: ((goodRecipes: SelectRecipe) => SelectRecipe) = (goodRecipes) => item => {
    switch(item) {
        case Item.Water: return source(item, Building.WaterExtractor, Purity.Impure);
        case Item.SulfuricAcid: return SulfuricAcid;
        case Item.NitricAcid: return NitricAcid;
        case Item.NitrogenGas: 
        case Item.UraniumWaste:
        case Item.PlutoniumWaste:
            return undefined;
        default:
            return goodRecipes(item);
    }
}

/**
 * Use first matching recipe of all recipes
 */
export const useAnyRecipe: SelectRecipe = safeRecipe(item =>
    Object.values(book)
        .flatMap(recipe => recipe)
        .find(recipe => selectItem(recipe.output, item)));

/**
 * Use only basic recipes (not recipes from hard drives)
 */
export const useBasicRecipes: SelectRecipe = safeRecipe(item =>
    Object.values(book)
        .map(recipes => recipes[0])
        .find(recipe => selectItem(recipe.output, item)));

/**
 * Select Recipes without using Screws
 */
export const avoidScrews: SelectRecipe = safeRecipe(item =>
    Object.values(book)
        .flatMap(recipe => recipe)
        .filter(recipe => selectItem(recipe.output, item))
        .find(recipe => !selectItem(recipe.output, Item.Screw)));
