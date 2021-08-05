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
  user: IUser | null | undefined = undefined;

  constructor(
    private http: HttpClient,
  ) {}
  get isLogged(): boolean {
    return !!this.user;
  }
  login(userData: { email: string; password: string }) {
    return this.http
      .post<IUser>(
        `http://localhost:8080/users/login`,
        JSON.stringify(userData)
      ).pipe(tap((user) => this.user = user ));
  }

  logout() {
    return this.http.post<IUser>(`http://localhost:8080/users/logout`, {}).pipe(
      tap(() => this.user = null)
    );
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
  getProfileInfo() {
    return this.http.get<IUser>(`http://localhost:8080/users/profile`).pipe(
      tap((user) => this.user = user)
    )
  }
}
