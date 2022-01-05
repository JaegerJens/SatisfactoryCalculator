import { IronIngotRecipes } from './iron-ingot.ts';
import { IronPlateRecipes } from './iron-plate.ts';
import { IronRodRecipes } from './iron-rod.ts';
import { ScrewRecipes } from './screw.ts';
import { ReinforcedIronPlateRecipes } from './reinforced-iron-plate.ts';
import { RotorRecipes } from './rotor.ts';

import { ConcreteRecipes } from './concrete.ts';

import { CopperIngotRecipes } from './copper-ingot.ts';
import { CopperSheetRecipes } from './copper-sheet.ts';
import { WireRecipes } from './wire.ts';
import { CableRecipes } from './cable.ts';

import { SteelIngotRecipes } from './steel-ingot.ts';
import { SteelPipe } from './steel-pipe.ts';
import { SteelBeam } from './steel-beam.ts';

import { ModularFrameRecipes } from './modular-frame.ts';

import { PlasticRecipes } from './plastic.ts';
import { RubberRecipes } from './rubber.ts';
import { FuelRecipes } from './fuel.ts';
import { PolymerResin, HeavyOilResidue } from './oil-intermediate.ts';

export const book = {
    IronIngotRecipes,
    IronPlateRecipes,
    IronRodRecipes,
    ScrewRecipes,
    ReinforcedIronPlateRecipes,
    RotorRecipes,
    ConcreteRecipes,
    CopperIngotRecipes,
    CopperSheetRecipes,
    WireRecipes,
    CableRecipes,
    SteelIngotRecipes,
    SteelPipeRecipes: [SteelPipe],
    SteelBeamRecipes: [SteelBeam],
    ModularFrameRecipes,
    PlasticRecipes,
    RubberRecipes,
    FuelRecipes,
    PolymerResinRecipes: [PolymerResin],
    HeavyOilResidueRecipes: [HeavyOilResidue],
}

export const basicRecipes = Object.values(book).map(recipes => recipes[0]);
export const allRecipes = Object.values(book);
