import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'https://route-ecommerce.onrender.com/api/v1/';

  numberOfCartItems = new BehaviorSubject(0);

  constructor(private _HttpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (response) => {
        this.numberOfCartItems.next(response.numOfCartItems);
        console.log(response);
      },
      error: (err) => console.log(err),
    });
  }

  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  // headers: any;
  // private initializeHeaders(): void {
  //   this.headers = {
  //     // token: this.getUserToken(),
  //     token: localStorage.getItem('userToken'),
  //   };
  // }

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

  onlinePayment(cartId: string, shippingAddress: any): Observable<any> {
    return this._HttpClient.post(
      this.url + `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: shippingAddress },
      {
        headers: this.headers,
      }
    );
  }
}
