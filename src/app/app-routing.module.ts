import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectLoggedInToCustomer = () => redirectLoggedInTo(['customers']);
const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {path: '', component: SigninComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe:  redirectLoggedInToCustomer }},
  {path: 'signup', component: SignupComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToCustomer }},
  {path: 'users', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToAuth }},
  {path: 'customers', component: CustomerComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToAuth }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [ HomeComponent, SigninComponent, SignupComponent, CustomerComponent ];
