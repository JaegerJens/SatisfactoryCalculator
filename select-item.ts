import { Item } from "./items.ts";
import { ItemCount } from "./types.ts";

export function selectItem<T extends ItemCount>(list: T[], item: Item): T | undefined {
    return list.find(entry => entry.item === item);
}
