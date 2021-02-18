import {Component,EventEmitter, Output} from "@angular/core"
import { Router } from "@angular/router";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    //@Output() featureSelected=new EventEmitter<string>();

    constructor(private router:Router){

    }
    onSelect(feature:string)
    {
        this.router.navigate(['/'+feature]);
        console.log('/'+feature);
        //this.featureSelected.emit(feature);       
    }
}