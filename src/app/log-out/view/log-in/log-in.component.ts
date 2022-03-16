import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';

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

  onSave() {
    if(this.form.valid){
      console.log('do something');
      console.log('yuki form: ', this.form);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
