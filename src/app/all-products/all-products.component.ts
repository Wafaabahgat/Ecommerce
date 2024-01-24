import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchPipe],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productsService: ProductsService,
    private _CartService: CartService,
    private toastr: ToastrService
  ) {}

  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        this.toastr.success('Success to Add Item');
        console.log(response);
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
  }
}
