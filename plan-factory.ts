import { formatThroughput } from "./format.ts";
import { Item } from "./items.ts";
import { Production, Throughput, ThroughputTime } from "./production.ts";
import { selectItem } from "./select-item.ts";
import { SelectRecipe } from "./types.ts";

interface InputOutput {
  item: Item;
  input: number;
  output: number;
}

function calcMissingInputs(productions: Production[], time: number): Throughput[] {
  const current = new Map<Item, InputOutput>();

  // add all inputs and outputs of all known productions
  productions.forEach((prod) => {
    // add all outputs
    const outputs = prod.output(time);
    outputs.forEach((o) => {
      const e = current.get(o.item);
      if (e) {
        e.output += o.count;
      } else {
        current.set(o.item, {
          item: o.item,
          output: o.count,
          input: 0,
        });
      }
    });

    // add all inputs
    const inputs = prod.input(time);
    inputs.forEach((i) => {
      const e = current.get(i.item);
      if (e) {
        e.input += i.count;
      } else {
        current.set(i.item, {
          item: i.item,
          input: i.count,
          output: 0,
        });
      }
    });
  });

  // return list of missing inputs
  // and ignore overproductions
  const missingInputs: Throughput[] = [];
  for (const itemState of current.values()) {
    if (itemState.input > itemState.output) {
      missingInputs.push({
        item: itemState.item,
        count: itemState.input - itemState.output,
        time: time,
      });
    }
  }
  return missingInputs;
}

export function planFactory(targets: Production[], selectRecipe: SelectRecipe): Production[] {
  const factory = [...targets];

  // items that have no known recipes (e.g. ore from miners)
  const missingItemRecipes: Item[] = [];
  const isMissingRecipe = (item: Item): boolean =>
    missingItemRecipes.indexOf(item) === -1;
  let resolved = false;

  while (!resolved) {
    // find matching recipe for all missing inputs
    const missingInputs = calcMissingInputs(factory, ThroughputTime)
      .filter((missing) => isMissingRecipe(missing.item));
    if (missingInputs.length === 0) {
      resolved = true;
    }
    missingInputs.forEach((targetProduction) => {
      const recipe = selectRecipe(targetProduction.item);
      if (!recipe) {
        console.log(`No recipe for ${formatThroughput(targetProduction)} found`);
        missingItemRecipes.push(targetProduction.item);
        return;
      }
      const wantedRecipeOutputItem = selectItem(recipe.output, targetProduction.item);
      if (!wantedRecipeOutputItem) {
        throw Error(`selectRecipt returned recipe that does not produce ${targetProduction.item}`);
      }

      // calculate required building counts to match recipe output with expected input
      const recipeThrouphput = wantedRecipeOutputItem.count / recipe.time;
      const buildingCount = (targetProduction.count / targetProduction.time) /
        recipeThrouphput;
      const production = new Production(recipe, buildingCount);
      factory.push(production);
    });
  }

  return factory;
}
