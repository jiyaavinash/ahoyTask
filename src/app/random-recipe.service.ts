import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiKey } from './apiKey';
import { recipes } from './products';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipeService {

  url = environment.baseUrl+"/recipes/random";
  constructor(private http:HttpClient) { }

  getRecipe(){
    return this.http.get<recipes>(this.url,{ params: { apiKey: apiKey } })
  }
}
