import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartDetails: any = [];
  constructor(
    private _CartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeItem(productId: string) {
    this._CartService.removeCartItem(productId).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this.toastr.success('Success to remove this Item');
        console.log(response.data);
      },
      error: (err) => {
        alert('Error in removing the item');
      },
    });
  }

  updateItemCount(productId: string, count: number) {
    this._CartService.updateItemCount(productId, count).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this.toastr.success('Success to update count Item');
        console.log(response.data);
      },
      error: (err) => {
        alert('Error in removing the item');
      },
    });
  }
}
