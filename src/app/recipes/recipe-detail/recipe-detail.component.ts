import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private shoppingListService:ShoppingListService,
              private route:ActivatedRoute,
              private router:Router,
              private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    })
  }
  AddToSL(){
    this.shoppingListService.addIngredientsToSL(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
}
