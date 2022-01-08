export enum Item {
    IronOre,
    IronIngot,
    IronPlate,
    IronRod,

    Limestone,
    Concrete,

    RawQuartz,
    Silica,

    Screw,
    ReinforcedIronPlate,
    Rotor,

    ModularFrame,
    HeavyModularFrame,
    FusedModularFrame,

    Coal,
    Sulfur,
    CompactedCoal,
    PetroleumCoke,

    CateriumOre,
    CateriumIngot,
    Quickwire,
    
    SteelIngot,
    SteelBeam,
    SteelPipe,
    EncasedIndustrialBeam,

    CopperOre,
    CopperIngot,
    CopperSheet,
    Wire,
    Cable,

    Water,

    CrudeOil,
    PolymerResin,
    HeavyOilResidue,
    Plastic,
    Rubber,
    Fuel,

    AluminumCasing,
    HeatSink,

    CrystalOscilator,
    Beacon,

    SulfuricAcid,
    NitricAcid,
    Uranium,
    ElectromagneticControlRod,

    EncasedUraniumCell,
    UraniumFuelRod,
    UraniumWaste,
    NonFissableUranium,

    PressureConversionCube,
    EncasedPlutoniumCell,
    PlutoniumPellet,
    PlutoniumFuelRod,
    PlutoniumWaste,
}

export function isSinkable(item: Item): boolean {
    switch(item) {
        case Item.Water:
        case Item.SulfuricAcid:
        case Item.NitricAcid:
        case Item.UraniumWaste:
        case Item.PlutoniumWaste:
            return false;
        default:
            return true;
    }
}

export function isRadioActive(item: Item): boolean {
    switch(item) {
        case Item.Uranium:
        case Item.EncasedUraniumCell:
        case Item.UraniumFuelRod:
        case Item.UraniumWaste:
        case Item.NonFissableUranium:
        case Item.PlutoniumPellet:
        case Item.EncasedPlutoniumCell:
        case Item.PlutoniumFuelRod:
        case Item.PlutoniumWaste:
            return true;
        default:
            return false;
    }
}
