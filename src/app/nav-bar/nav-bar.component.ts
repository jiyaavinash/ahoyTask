import { Component, Input, OnInit } from '@angular/core';
import { SearchItemService } from '../search-item.service';
import { Output, EventEmitter } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedItems: any="";
  prodName :string = "";
  @Output() showItems  = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  
  searchItem(){
   
    if(this.prodName){
      console.log(this.prodName)
      this.showItems.emit(this.prodName)
      // this.searchedItems=this.prodName;
    }
  }

  
  

}
