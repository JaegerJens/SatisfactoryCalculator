import { Item } from './items';
import { ItemCount, Recipe } from './recipes/types';

const ThroughputTime = 60;

export interface Throughput extends ItemCount {
    time: number;
}

interface InputOutput {
    item: Item,
    input: number,
    output: number,
}

export class Production {
    readonly recipe: Recipe;
    readonly count: number;

    constructor(recipe: Recipe, count: number) {
        this.recipe = recipe;
        this.count = count;
    }

    output(time: number): Throughput[] {
        const scaling = time / this.recipe.time;
        return this.recipe.output.map(element => ({
            item: element.item,
            time: time,
            count: element.count * this.count * scaling,
        }));
    }

    input(time: number): Throughput[] {
        const scaling = time / this.recipe.time;
        return this.recipe.input.map(element => ({
            item: element.item,
            time: time,
            count: element.count * this.count * scaling,
        }))
    }
}

function calcMissingInputs(productions: Production[], time: number): Throughput[] {
    const current = new Map<Item, InputOutput>();

    // add all inputs and outputs of all known productions
    productions.forEach(prod => {
        // add all outputs
        const outputs = prod.output(time);
        outputs.forEach(o => {
            if (current.has(o.item)) {
                const e = current.get(o.item);
                e.output += o.count;
            } else {
                current.set(o.item, {
                    item: o.item,
                    output: o.count,
                    input: 0,
                });
            }
        })

        // add all inputs
        const inputs = prod.input(time);
        inputs.forEach(i => {
            if (current.has(i.item)) {
                const e = current.get(i.item);
                e.input += i.count;
            } else {
                current.set(i.item, {
                    item: i.item,
                    input: i.count,
                    output: 0,
                })
            }
        });
    });

    // return list of missing inputs
    // and ignore overproductions
    const missingInputs: Throughput[] = [];
    for(const itemState of current.values()) {
        if (itemState.input > itemState.output) {
            missingInputs.push({
                item: itemState.item,
                count: itemState.input - itemState.output,
                time: time,
            })
        }
    };
    return missingInputs;
}

export function planFactory(target: Production, recipes: Recipe[]): Production[] {
    const factory = [target];

    // find matching recipe for all missing inputs
    const missingInputs = calcMissingInputs(factory, ThroughputTime);
    missingInputs.forEach(targetProduction => {
        const recipe = recipes.find(r => r.output.find(o => o.item === targetProduction.item));
        if (!recipe) {
            console.log(`No recipe for ${targetProduction.item} found`);
            return
        }

        // calculate required building counts to match recipe output with expected input
        const wantedRecipeOutputItem = recipe.output.find(o => o.item === targetProduction.item);
        const recipeThrouphput = wantedRecipeOutputItem.count / recipe.time;
        const buildingCount = (targetProduction.count / targetProduction.time) / recipeThrouphput;
        const production = new Production(recipe, buildingCount);
        factory.push(production);
    });

    return factory;
}
