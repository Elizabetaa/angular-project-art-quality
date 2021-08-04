import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
  get email(): string {
    return this.userService.user?.email || '';
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
