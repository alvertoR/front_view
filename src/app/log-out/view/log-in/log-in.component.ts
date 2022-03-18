import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginDTO } from 'src/app/typings';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public inputText: string = 'text';
  public inputPassword: string = 'password';
  public inputEmail: string = 'email';
  public contentButton: string = 'Iniciar sesión';
  public typeButton: string = 'submit';
  public serveError: boolean = false;

  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  get emailFielForm(): AbstractControl | null {
    return this.form.get('email');
  }

  get passwordFielForm(): AbstractControl | null {
    return this.form.get('password');
  }

  get isEmailInvalid(): boolean | undefined {
    return this.emailFielForm?.invalid && this.emailFielForm.touched;
  }

  get isPasswordInvalid(): boolean | undefined {
    return this.passwordFielForm?.invalid && this.passwordFielForm.touched;
  }

  async onSave() {
    this.serveError = false;
    if(this.form.valid){
      const data = {
        email: this.form.value.email,
        password: this.form.value.password
      } as LoginDTO;

      try{
        const response = await this.authService.login(data);
        const token = response.data.token;
        //Set token in cookie
        console.log(token);
        this.form.reset();
      }catch(error){
        this.serveError = true;
        const time = setTimeout(() => {
          this.serveError = false;
          clearTimeout(time);
        }, 3000);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

}
