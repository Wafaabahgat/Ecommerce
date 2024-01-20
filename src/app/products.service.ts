import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class ProductsService {
  private url = 'https://route-ecommerce.onrender.com/api/v1/';

  constructor(private HttpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this.HttpClient.get(this.url + 'products');
  }
  getProductDetails(id: string): Observable<any> {
    return this.HttpClient.get(this.url + `products/${id}`);
  }
}
