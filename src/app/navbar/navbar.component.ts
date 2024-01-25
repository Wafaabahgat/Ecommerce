import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogin: boolean = false;
  cartNum: number = 0;
  // _cartService = Inject(CartService);

  constructor(
    private authService: AuthService,
    private _cartService: CartService
  ) {
    authService.userData.subscribe({
      next: () => {
        if (authService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
    _cartService.numberOfCartItems.subscribe({
      next: (value) => {
        this.cartNum = value;
        console.log(value);
      },
      error: (err) => console.log(err),
    });
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.authService.userData.next(null);
    alert('sure you want to logout!');
  }
}
