import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient

  ) {}

  registerHandler(form: NgForm) : void{
    this.http.post(`http://localhost:8080/users/register`, JSON.stringify(form.value)).subscribe();
    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/login';
    this.router.navigate([redirectUrl]);
  }
}
