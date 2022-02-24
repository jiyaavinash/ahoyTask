import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahoy';
  searchedItems:any ;

  getSearchData(prod:string){
  this.searchedItems= prod;
  console.log("here",this.searchedItems)
  }
}
