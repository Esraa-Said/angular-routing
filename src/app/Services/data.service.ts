import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://dummyjson.com/products';


  // interface >< any
  getProducts(): Observable<any>{
    return this.http.get<any>(this.apiURL)

  }
  apiPostURL = 'https://dummyjson.com/posts/add';
  addProduct(product: any): Observable<any>{
    const headers = new HttpHeaders({'content-type': 'application/json'}); // type of data
    return this.http.post<any>(this.apiPostURL, product, {headers});
  }
}
