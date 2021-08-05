import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailValidator = emailValidator;
  notCorectInputs: boolean = false;

  constructor(
    private userService: UserServiceService,
    private router: Router,
  ) {}

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userService.login({ email, password }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.notCorectInputs = true;
      },
    });
  }
}
// (courses) => (this.courses = courses)