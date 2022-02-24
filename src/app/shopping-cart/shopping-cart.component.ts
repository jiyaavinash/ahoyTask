import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items:any;
  constructor(private authservice:AuthenticateService) { }

  ngOnInit(): void {
  }

  showCartItems(){
      this.authservice.getProduct().subscribe(
        data=>{
        console.log(data.products);
        this.items = data.products;
      })
    
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
