import { batteryFactory } from "./factory/battery-factory.ts";
import { formatItem, formatNumber } from "./format.ts";
import { sumProductions } from "./plan-factory.ts";

console.log('## Factory');
batteryFactory.forEach(prod => console.log(prod.toString()));

console.log('## Balance');
const balance = sumProductions(batteryFactory, 60);
balance.forEach(itemState => {
    const diff = itemState.output - itemState.input;
    if (diff === 0) {
        console.log(`Balanced ${formatItem(itemState.item)}: ${formatNumber(itemState.input)}/min`);
    } else if (diff > 0) {
        console.log(`Output ${formatItem(itemState.item)}: ${formatNumber(diff)}/min`);
    } else {
        console.log(`Input ${formatItem(itemState.item)}: ${formatNumber(-diff)}/min`);
    }
});
