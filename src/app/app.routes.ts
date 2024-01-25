import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  {
    path: 'categories',
    canActivate: [AuthGuard],
    component: CategoriesComponent,
  },
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'brands', canActivate: [AuthGuard], component: BrandsComponent },
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent },
  {
    path: 'productdetails/:id',
    canActivate: [AuthGuard],
    component: ProductdetailsComponent,
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];
