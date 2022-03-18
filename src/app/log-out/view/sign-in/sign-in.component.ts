import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { NewUserDTO } from 'src/app/typings';

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
  public errorServe: boolean = false;

  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
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

  async onSave() {
    if(this.form.valid){
      const data = {
        email: this.form.value.email,
        nick: this.form.value.nick,
        password: this.form.value.password
      } as NewUserDTO;

      try{
        await this.userService.create(data);
        this.form.reset();
        this.router.navigate(['log-in']);
      }catch(error){
        this.errorServe = true;
        const time = setTimeout(() => {
          this.errorServe = false;
          clearTimeout(time);
        }, 3000);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

}
