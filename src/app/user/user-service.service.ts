import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-token';
import { IUser } from '../shared/interfaces/IUser';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(
    private http: HttpClient,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }
  login(userData: { email: string; password: string }) {
    return this.http
      .post<IUser>(
        `http://localhost:8080/users/login`,
        JSON.stringify(userData)
      );
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
  register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  })  {
    return this.http
      .post<IUser>(`http://localhost:8080/users/register`, JSON.stringify(data));
  }
}
