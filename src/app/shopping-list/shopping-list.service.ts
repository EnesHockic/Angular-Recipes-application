import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Orange',10)
      ];

    getIngedients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredientsToSL(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}