import { formatThroughput } from "./format.ts";
import { Item } from "./items.ts";
import { Production, Throughput, ThroughputTime } from "./production.ts";
import { selectItem } from "./select-item.ts";
import { SelectRecipe } from "./types.ts";

export interface InputOutput {
  item: Item;
  input: number;
  output: number;
}

export function sumProductions(productions: Production[], time: number): InputOutput[] {
  const result: InputOutput[] = [];

  function addInput(item: Item, count: number) {
    const entry = result.find(io => io.item === item);
    if (entry) {
      entry.input += count;
    } else {
      result.push({
        item,
        input: count,
        output: 0,
      });
    }
  }

  function addOutput(item: Item, count: number) {
    const entry = result.find(io => io.item === item);
    if (entry) {
      entry.output += count;
    } else {
      result.push({
        item,
        output: count,
        input: 0,
      });
    }
  }

  productions.forEach((prod) => {
    prod.output(time).forEach(output => addOutput(output.item, output.count));
    prod.input(time).forEach(input => addInput(input.item, input.count));
  });
  return result;
}

function calcMissingInputs(productions: Production[], time: number): Throughput[] {
  const balance = sumProductions(productions, time);

  // return list of missing inputs
  // and ignore overproductions
  const missingInputs: Throughput[] = [];
  for (const itemState of balance) {
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
