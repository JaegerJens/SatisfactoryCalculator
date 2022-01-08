import { formatThroughput } from "./format.ts";
import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { useAnyRecipe } from "./recipes/index.ts";
import { PlutoniumPower, UraniumPower } from "./recipes/nuclear-power.ts";

console.log('## URANIUM POWER');
const uraniumPower = new Production(UraniumPower, 5);
const uraniumPowerPlants = planFactory([uraniumPower], useAnyRecipe);
console.log(uraniumPowerPlants.map(prod => prod.toString()).join('\n'));
console.log('OUTPUT: ', uraniumPower.output(60).map(formatThroughput).join(','));

console.log('\n\n## PLUTONIUM POWER');
const plutoniumPower = new Production(PlutoniumPower, 10);
const plutoniumPowerPlants = planFactory([plutoniumPower], useAnyRecipe);
console.log(plutoniumPowerPlants.map(prod => prod.toString()).join('\n'));
console.log('OUTPUT: ', plutoniumPower.output(60).map(formatThroughput).join(','));