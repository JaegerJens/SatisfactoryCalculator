import { formatThroughput } from "./format.ts";
import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { useAnyRecipe } from "./recipes/index.ts";
import { UraniumPower } from "./recipes/nuclear-power.ts";
import { PlutoniumFuelRod } from "./recipes/plutonium-fuel-rod.ts";

console.log('## URANIUM POWER');
const uraniumPower = new Production(UraniumPower, 5);
const uraniumPowerPlants = planFactory([uraniumPower], useAnyRecipe);
console.log(uraniumPowerPlants.map(prod => prod.toString()).join('\n'));
console.log('OUTPUT: ', uraniumPower.output(60).map(formatThroughput).join(','));

console.log('\n\n## PLUTONIUM FUEL RODS SINKING');
const plutoniumFuelRods = new Production(PlutoniumFuelRod, 4);
const sinkWasteFactory = planFactory([plutoniumFuelRods], useAnyRecipe);
console.log(sinkWasteFactory.map(prod => prod.toString()).join('\n'));
console.log('OUTPUT: ', plutoniumFuelRods.output(60).map(formatThroughput).join(','));