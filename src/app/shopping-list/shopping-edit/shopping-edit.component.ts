import { Component, OnInit, Output,EventEmitter, ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded= new EventEmitter<Ingredient>();
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddShoppingListItem(nameInput){
    const newIngredient= new Ingredient(nameInput.value,this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
