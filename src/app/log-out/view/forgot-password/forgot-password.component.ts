import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public contentButton: string = 'Enviar Correo';
  public typeButton: string = 'button';
  public imgSrc: string = 'assets/img/mail.svg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
