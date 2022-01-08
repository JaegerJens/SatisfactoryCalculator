import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { useAnyRecipe } from "./recipes/index.ts";
import { PlutoniumPower, UraniumPower } from "./recipes/nuclear-power.ts";

const uraniumPower = new Production(UraniumPower, 10);
const uraniumPowerPlants = planFactory([uraniumPower], useAnyRecipe);
console.log(uraniumPowerPlants.map(prod => prod.toString()).join('\n'));

const plutoniumPower = new Production(PlutoniumPower, 1);
const plutoniumPowerPlants = planFactory([plutoniumPower], useAnyRecipe);
console.log(plutoniumPowerPlants.map(prod => prod.toString()).join('\n'));
