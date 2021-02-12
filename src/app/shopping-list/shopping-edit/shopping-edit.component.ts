import { Component, OnInit, Output,EventEmitter, ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor(private shoppingListService:ShoppingListService) { }
 
  ngOnInit(){
  }
  onAddShoppingListItem(nameInput){
    const newIngredient= new Ingredient(nameInput.value,this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
