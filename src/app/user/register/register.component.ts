  
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { emailValidator, passwordDontMatch } from 'src/app/shared/validators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy{
  emailValidator = emailValidator;
  passwordDontMatch = passwordDontMatch;
  killSubscription = new Subject();
  emailIsTaken:boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, passwordDontMatch(
        () => this.form?.get('password'), this.killSubscription
      )]]
    });
  }
  

  registerHandler(): void {
    if (this.form.invalid) { return; }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.emailIsTaken = true;
      }
    })
  }
  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
}