import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LogOutRoutingModule } from './log-out-routing.module';
import { HomeComponent } from './view/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { LogInComponent } from './view/log-in/log-in.component';
import { ForgotPasswordComponent } from './view/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './view/change-password/change-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    LogInComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LogOutRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LogOutModule { }
