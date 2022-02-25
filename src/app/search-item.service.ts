import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './apiKey';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class SearchItemService {
  private url = environment.baseUrl+ "/food/products";
  private produrl = environment.baseUrl+"/food/products/search"
  
  constructor(private http: HttpClient) { }

  searchItem(id:number){
    return this.http.get(this.url+id,{ params: { apiKey: apiKey }});
  }

  searchProduct(name:string){
    return this.http.get<products>(this.produrl ,{ params: { apiKey: apiKey , query: name }});
  }
}
