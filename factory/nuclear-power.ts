import { planFactory } from "../plan-factory.ts";
import { Production } from "../production.ts";
import { useAnyRecipe } from "../recipes/index.ts";
import { UraniumPower } from "../recipes/nuclear-power.ts";
import { PlutoniumFuelRod } from "../recipes/plutonium-fuel-rod.ts";

const uraniumPower = new Production(UraniumPower, 5);
export const uraniumPowerPlants = planFactory([uraniumPower], useAnyRecipe);

const plutoniumFuelRods = new Production(PlutoniumFuelRod, 4);
export const sinkWasteFactory = planFactory([plutoniumFuelRods], useAnyRecipe);
