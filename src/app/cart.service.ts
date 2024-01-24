import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'https://route-ecommerce.onrender.com/api/v1/';

  headers: any = {
    token: localStorage.getItem('userToken'),
  };

  constructor(private _HttpClient: HttpClient) {}

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.url + 'cart',
      { productId: productId },
      {
        headers: this.headers,
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(this.url + 'cart', {
      headers: this.headers,
    });
  }

  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.url + `cart/${productId}`, {
      headers: this.headers,
    });
  }

  updateItemCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      this.url + `cart/${productId}`,
      { count: count },
      {
        headers: this.headers,
      }
    );
  }
}
