import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/app/typings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string = 'http://localhost:3000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  async login(data: LoginDTO): Promise<any> {
    try{
      const request = this.http.post(`${this.BASE_URL}/auth/login`, data).toPromise();
      return request;
    }catch(error: any){
      return error;
    }
  }

  async sendEmail(email: string): Promise<any> {
    try{
      const request = this.http.post(`${this.BASE_URL}/auth/forgot-password`, { email }).toPromise();
      return request;
    }catch(error: any){
      return error;
    }
  }
}
