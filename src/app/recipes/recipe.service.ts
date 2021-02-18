import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test recipe', 
        'This is test', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg',
        [new Ingredient('Kupus',3),new Ingredient('Meso',4),new Ingredient('Hljeb',1)])
        , new Recipe('Another test recipe', 
        'This is test', 
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg',
        [new Ingredient('Brasno',5),new Ingredient('Germa',2),new Ingredient('Voda',4)])
      ];
    
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(id:number){
          return this.recipes[id];
      }
}