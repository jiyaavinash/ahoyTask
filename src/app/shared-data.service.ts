import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  public searchString:string ="";
  public selectedSearchedItem1 = new BehaviorSubject(this.searchString);
  public selectedSearchedItem = this.selectedSearchedItem1.asObservable();
  searchItem(item:string){
    
    this.selectedSearchedItem1.next(item);
  }
}
