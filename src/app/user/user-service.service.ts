import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: IUser | undefined;

  get isLogged(): boolean{
    return !!this.user;
  }
  constructor(private http: HttpClient) { }

  login(email: string, password: string): void{
    setTimeout(() => {
      this.user = {
        email,
        firstName: 'John',
        lastName: 'Doe'
      }
    },1000)
  }

  logout():void{
    setTimeout(()=> {
      this.user = undefined;
    },1000)
  }
}
