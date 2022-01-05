import { Item } from "./items.ts";
import { Building } from "./buildings.ts";
import { ItemCount, Recipe } from "./recipes/types.ts";
import { Throughput } from "./calculator.ts";

export function formatItem(item: Item): string {
    return Item[item];
}

export function formatBuilding(building: Building): string {
    return Building[building];
}

export function formatItemCount(itemCount: ItemCount): string {
    return `${itemCount.count}*${formatItem(itemCount.item)}`;
}

export function formatThroughput(throughput: Throughput): string {
    const itemsPerMinute = throughput.count * 60 / throughput.time;
    return `${itemsPerMinute}/min ${formatItem(throughput.item)}`;
}

export function formatRecipe(recipe: Recipe): string {
    const input = `[${recipe.input.map(formatItemCount).join(', ')}]`;
    const output = `[${recipe.output.map(formatItemCount).join(', ')}]`;
    return `Recipe ${input} -> ${output} in ${formatBuilding(recipe.building)}`;
}