import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './view/change-password/change-password.component';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { HomeComponent } from './view/home/home.component';
import { LogInComponent } from './view/log-in/log-in.component';
import { SignInComponent } from './view/sign-in/sign-in.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'sign',
    component: SignInComponent
  },
  {
    path:'log-in',
    component: LogInComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path:'update-password',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogOutRoutingModule { }
