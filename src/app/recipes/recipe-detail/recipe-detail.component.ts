import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  AddToSL(){
    this.shoppingListService.addIngredientsToSL(this.recipe.ingredients);
  }
}
