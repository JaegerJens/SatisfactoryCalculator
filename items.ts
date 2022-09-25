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
    EmptyCanister,

    CrudeOil,
    PolymerResin,
    HeavyOilResidue,
    Plastic,
    Rubber,
    Fuel,

    CircuitBoard,
    AILimiter,
    HighSpeedConnector,

    Bauxite,
    AluminumScrap,
    AluminumIngot,
    AlcladAluminumSheet,
    AluminumCasing,
    AluminaSolution,
    PackagedAluminaSolution,
    HeatSink,
    Battery,

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
    switch (item) {
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
    switch (item) {
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

export function isSourceItem(item: Item): boolean {
    switch (item) {
        case Item.Water:
        case Item.Limestone:
        case Item.IronOre:
        case Item.CopperOre:
        case Item.CateriumOre:
        case Item.Coal:
        case Item.CrudeOil:
        case Item.Bauxite:
        case Item.NitrogenGas:
        case Item.Uranium:
            return true;
        default:
            return false;
    }
}
