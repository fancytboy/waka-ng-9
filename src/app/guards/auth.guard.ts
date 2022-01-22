import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public fireAuth: AngularFireAuth) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this.fireAuth.currentUser;
    const isAuthenticated = user ? true : false;
    if (!isAuthenticated) {
      redirectUnauthorizedTo('');
    }
    return isAuthenticated;
  }
}
