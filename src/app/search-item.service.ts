import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './apiKey';
@Injectable({
  providedIn: 'root'
})
export class SearchItemService {
  private url = environment.baseUrl+ "/food/products/";
  
  constructor(private http: HttpClient) { }

  searchItem(id:number){
    return this.http.get(this.url+id,{ params: { apiKey: apiKey }});
  }
}
