import { Component, Input, OnInit } from '@angular/core';
import { SearchItemService } from '../search-item.service';
import { Output, EventEmitter } from '@angular/core';
import { products } from '../products';
import { Observable, observable } from 'rxjs';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchedItems: any="";
  prodName :string = "";
  // @Output() showItems  = new EventEmitter<string>();
  constructor(private shareddata:SharedDataService) { }

  ngOnInit(): void {
  }

  
  searchItem(){
   
    // if(this.prodName){
      this.shareddata.searchItem(this.prodName);
      // this.showItems.emit(this.prodName)
      // this.searchedItems=this.prodName;
    // }
  }

  

}
