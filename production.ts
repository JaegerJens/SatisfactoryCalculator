import { formatBuilding, formatNumber, formatThroughput } from "./format.ts";
import { ItemCount, Recipe } from './types.ts';

export const ThroughputTime = 60;

export interface Throughput extends ItemCount {
    time: number;
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

    toString(): string {
        const outputs = this.output(ThroughputTime).map(formatThroughput)
        return `Produce [${outputs.join(', ')}] in ${formatNumber(this.count)} ${formatBuilding(this.recipe.building)}`;
    }
}
