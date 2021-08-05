import { Component } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent  {
  constructor(private userService: UserServiceService) {}

 get user(): IUser {
   return this.userService.user!;
  }
}
