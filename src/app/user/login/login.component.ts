import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  // login(email: string, password: string): void {
  //   this.userService.login(email, password);
  //   const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
  //   this.router.navigate([redirectUrl]);
  // }

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.userService.login(form.value.email, form.value.password);
    const redirectUrl =
      this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
    this.http
      .post(`http://localhost:8080/users/login`, JSON.stringify(form.value))
      .subscribe();
  }
}