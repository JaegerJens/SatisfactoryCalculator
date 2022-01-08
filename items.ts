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
    Stator,

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

    CircuitBoard,
    AILimiter,
    HighSpeedConnector,

    AluminumCasing,
    HeatSink,

    CrystalOscilator,
    Beacon,

    NitrogenGas,
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
        case Item.CrudeOil:
        case Item.SulfuricAcid:
        case Item.NitrogenGas:
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
