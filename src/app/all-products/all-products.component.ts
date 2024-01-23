import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SearchPipe],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
  }
}
