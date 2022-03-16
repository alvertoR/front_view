import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public inputText: string = 'text';
  public inputPassword: string = 'password';
  public inputEmail: string = 'email';
  public contentButton: string = 'Registrarse';
  public typeButton: string = 'submit';

  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      nick:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  get nickFieldForm(): AbstractControl | null {
    return this.form.get('nick');
  }

  get emailFielForm(): AbstractControl | null {
    return this.form.get('email');
  }

  get passwordFielForm(): AbstractControl | null {
    return this.form.get('password');
  }

  get isNickNameInvalid(): boolean | undefined {
    return this.nickFieldForm?.invalid && this.nickFieldForm.touched;
  }

  get isEmailInvalid(): boolean | undefined {
    return this.emailFielForm?.invalid && this.emailFielForm.touched;
  }

  get isPasswordInvalid(): boolean | undefined {
    return this.passwordFielForm?.invalid && this.passwordFielForm.touched;
  }

  onSave() {
    if(this.form.valid){
      console.log('do something');
      console.log('yuki form: ', this.form);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
