import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private userService: UserServiceService) { }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

}
