import { Injectable } from '@angular/core';
import { NewUserDTO } from 'src/app/typings';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = 'http://localhost:3000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  async create(data: NewUserDTO): Promise<any> {
    try{
      const request = this.http.post(`${this.BASE_URL}/users`, data).toPromise();
      return request;
    }catch(error: any){
      return error;
    }
  }
}
