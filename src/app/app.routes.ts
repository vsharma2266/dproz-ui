import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DprozMainComponent } from './dproz/dproz-main/dproz-main.component';
import { HomeComponent } from './dproz-home/home/home.component';
import { LoginComponent } from './dproz-authentication/login/login.component';
import { VerificationComponent } from './dproz-authentication/verification/verification.component';
import { SignupComponent } from './dproz-authentication/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dproz',
    pathMatch: 'full'
  },
  {
    path: 'dproz',
    component: DprozMainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'authenticate', component: VerificationComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: true
      }
    )
  ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoute {}



