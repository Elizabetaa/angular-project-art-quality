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

  registerHandler(form: NgForm): void {
    if (form.invalid) { return; }
    this.userService.register(form.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}