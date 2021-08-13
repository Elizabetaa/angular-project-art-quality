import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/IUser';
import { tap } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-token';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user: IUser | null | undefined = undefined;

  constructor(private http: HttpClient,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
    ) {
      try {
        const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
        this.user = JSON.parse(localStorageUser);
      } catch {
        this.user = undefined;
      }
    }

  get isAdmin():boolean{
    return this.user?.userRole == "admin";
  }
  get isLogged(): boolean {
    return !!this.user;
  }
  login(userData: { email: string; password: string }) {
    return this.http
      .post<IUser>(
        `http://localhost:8080/users/login`,
        JSON.stringify(userData)
      ).pipe(tap((user) => this.user = user,));
  }

  logout() {
    this.localStorage.removeItem('<USER>')
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
