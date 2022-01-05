import { planFactory, Production } from "./calculator.ts";
import { IronIngotRecipes, IronPlateRecipes } from "./recipes/index.ts";

const recipes = [IronPlateRecipes, IronIngotRecipes].flatMap(r => r);
const target = new Production(IronPlateRecipes[0], 4);

const factory = planFactory(target, recipes);

console.log(factory);
