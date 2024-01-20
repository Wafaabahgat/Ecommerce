import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class AuthService {
  constructor(private HttpClient: HttpClient) {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('userToken') !== null
    ) {
      this.decodeUseData();
    }
  }

  userData = new BehaviorSubject(null);

  private url = 'https://route-ecommerce.onrender.com/api/v1/';

  decodeUseData() {
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken: any = jwtDecode(encodeToken);
    this.userData.next(decodeToken);
  }

  register(userData: object): Observable<any> {
    return this.HttpClient.post(this.url + 'auth/signup', userData);
  }

  login(userData: object): Observable<any> {
    return this.HttpClient.post(this.url + 'auth/signin', userData);
  }

  // logOut() {
  // localStorage.removeItem('userToken');
  // this.userData.next(null);
  // this.Router.navigate(['/login']);
  // }
}
