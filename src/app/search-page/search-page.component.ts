import { Component, Input, OnInit } from '@angular/core';
import { SearchItemService } from '../search-item.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() showItems:any="";
  searchedItems:any;
  searchedData:any;
  constructor(private search :SearchItemService,private searchitem: SearchItemService) { }

  ngOnInit(): void {
  }

  getSearchedProd(){
    this.searchitem.searchProduct(this.showItems).subscribe(
     data => this.searchedItems = data.products
    
   )
 }
 getInfo(id:number){
  this.search.searchItem(id).subscribe(
    data => {
      this.searchedData = data;
      console.log(data);
    }
  )
}


addToCart(id:number,title:string){
  const item = {
    name: title,
    id : id,
    count : 1
}
  window.localStorage.setItem(id.toString(), JSON.stringify(item));
}

incrementCart(id:number){
  var products = window.localStorage.getItem(id.toString());
  var items = JSON.parse(products || '{}');
  const item = {
    name: items.title,
    id : id,
    count : items.count+1
}
window.localStorage.setItem(id.toString(), JSON.stringify(item));
}

decreseCartItem(id:number){
  var products = window.localStorage.getItem(id.toString());
  var items = JSON.parse(products || '{}');
  const item = {
    name: items.title,
    id : id,
    count : items.count-1
}
window.localStorage.setItem(id.toString(), JSON.stringify(item));
}

getQuantity(id:number){
  var products = window.localStorage.getItem(id.toString());
  var items = JSON.parse(products || '{}');
  if(Object.keys(items).length === 0){
    return 0;
  }
  var quantity = Number(items.count);
  console.log(quantity)
  return quantity;
}
}
