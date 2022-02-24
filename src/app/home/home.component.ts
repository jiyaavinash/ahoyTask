import { Component, Input, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { apiKey } from '../apiKey';
import { SearchItemService } from '../search-item.service';
import { RandomRecipeService } from '../random-recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() proddata:any="";

  constructor(private authservice : AuthenticateService,private search :SearchItemService,
    private recipe:RandomRecipeService) {
     
     } 
  ngOnInit(): void {
    // setTimeout(() => {
      this.showProducts();
    this.recipes();
    // }, 3000);
  }

  items:any;
  searchedData : any;
  recipeOfTheDay : any;
  product :any;
  searchedItems:any;

  showProducts(){
    this.authservice.getProduct().subscribe(
      data=>{
      console.log(data.products);
      this.items = data.products;
    })
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
  recipes(){
    this.recipe.getRecipe().subscribe(
      data  =>{
        this.recipeOfTheDay = data.recipes[0].summary;
        // console.log(data)
      }
    )
  }
}
