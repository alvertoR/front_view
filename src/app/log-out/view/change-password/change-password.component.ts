import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public contentButton: string = 'Actualizar';
  public typeButton: string = 'button';
  public inputPassword: string = 'password';

  public newPassword = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  get isNewPasswordField(): AbstractControl | null {
    return this.newPassword;
  }

  get isPasswordInvalid(): boolean | undefined {
    return this.newPassword?.invalid && this.newPassword.touched;
  }

  onSave(): void {
    if(this.newPassword.valid){
      console.log('yuki: ', this.newPassword);
    }else{
      this.newPassword.markAllAsTouched();
    }
  }

}
