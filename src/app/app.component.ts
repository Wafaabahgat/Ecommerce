import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { InjectionToken } from '@angular/core';
import { AuthGuard } from './auth.guard';

export const AUTH_GUARD_TOKEN = new InjectionToken<any>('auth.guard.token');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    AuthService,
    ProductsService,
    {
      provide: AUTH_GUARD_TOKEN,
      useValue: AuthGuard,
    },
    // AuthGuard,
  ],
})
export class AppComponent {
  title = 'angular';
}
