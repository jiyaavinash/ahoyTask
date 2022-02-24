import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiKey } from './apiKey';
import { environment } from 'src/environments/environment';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private url = environment.baseUrl + "/food/products/search?query=''"
  constructor(private http: HttpClient) {

  }
  //  headers = new HttpHeaders({
  //   "apiKey": apiKey ,
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  // });
  getProduct() {
    return this.http.get<products>(this.url, { params: { apiKey: apiKey } })

  }
}
