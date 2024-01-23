import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterOutlet,
  RouterModule,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { InjectionToken } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { CarouselModule } from 'ngx-owl-carousel-o';
//import { BrowserModule } from '@angular/platform-browser';

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
    CarouselModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

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
  showLoader: boolean = false;
  constructor(private router: Router) {}
  // router: Router = inject(Router);

  ngOnInit() {
    // this.router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     this.showLoader = true;
    //   }
    //   if (
    //     routerEvent instanceof NavigationEnd ||
    //     routerEvent instanceof NavigationCancel ||
    //     routerEvent instanceof NavigationError
    //   ) {
    //     this.showLoader = false;
    //   }
    // });
  }
}
