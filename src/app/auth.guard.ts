// import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
//
// export const authGuard: CanActivateFn = (route, state) => {
// route: ActivatedRouteSnapshot;
//
// return true;
// };
//

import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// import { AUTH_GUARD_TOKEN } from './app.component';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // constructor(@Inject(AUTH_GUARD_TOKEN) private AuthGuard: any, private router: Router) {}

  constructor( private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
