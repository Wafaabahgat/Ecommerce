import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });
  constructor(private _CartService: CartService) {}

  navigateToPage(url: string) {
    window.location.href = url;
  }

  handleSub(shippingAddress: FormGroup) {
    this._CartService
      .onlinePayment(shippingAddress.value, '65afbb53a7621d003307dff8')
      .subscribe({
        next: (response: any) => {
          this.navigateToPage = response.session.url;
          console.log(response.session.url);
        },
        error: (error) => console.log(error),
      });
  }
}
