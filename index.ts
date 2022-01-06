import { planFactory } from "./plan-factory.ts";
import { Production } from "./production.ts";
import { avoidScrews, book } from "./recipes/index.ts";

const target = new Production(book.ModularFrameRecipes[0], 4);

const factory = planFactory(target, avoidScrews);

console.log(factory.map(prod => prod.toString()).join('\n'));
