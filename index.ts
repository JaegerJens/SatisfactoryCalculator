import { planFactory, Production } from "./calculator.ts";
import { book, basicRecipes } from "./recipes/index.ts";

const target = new Production(book.ModularFrameRecipes[0], 4);

const factory = planFactory(target, basicRecipes);

console.log(factory.map(prod => prod.toString()).join('\n'));
