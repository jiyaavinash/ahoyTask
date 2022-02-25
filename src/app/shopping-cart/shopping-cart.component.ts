import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { SearchItemService } from '../search-item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items:any;
  products = window.localStorage.getItem('id');
  item = JSON.parse(this.products || '{}');
  constructor(private search:SearchItemService) {
    this.showCartItems();
   }

  ngOnInit(): void {
  }

  showCartItems(){
    var ids:Array <number>=[];
    
    for(var key in this.item){
      if(key =="id"){
        ids.push(this.item[key])
      }
    }
    if(ids){
      ids.forEach(i=>{
        this.search.searchItem(i).subscribe(
        data=>{
        this.items = data.products;
      })
      })
    }
    if(!this.items){
      console.log("cart empty")
    }
    
    
      // this.authservice.getProduct().subscribe(
      //   data=>{
      //   console.log(data.products);
      //   this.items = data.products;
      // })
    
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
