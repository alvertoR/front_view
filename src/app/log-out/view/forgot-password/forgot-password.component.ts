import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public contentButton: string = 'Enviar Correo';
  public typeButton: string = 'button';
  public inputEmail: string = 'email';

  public email = new FormControl('', [Validators.required]);
  public serveError: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get isEmailField(): AbstractControl | null {
    return this.email;
  }

  get isEmailInvalid(): boolean | undefined {
    return this.isEmailField?.invalid && this.isEmailField.touched;
  }

  async onSave(): Promise<void> {
    if(this.email.valid){
      try{
        await this.authService.sendEmail(this.email.value);
        this.email.reset();
      }catch(error){
        this.serveError = true;
        const time = setTimeout(() => {
          this.serveError = false;
          clearTimeout(time);
        }, 3000);
      }
    }else{
      this.email.markAllAsTouched();
    }
  }

}
