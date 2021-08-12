import { Component } from '@angular/core';
import { UserServiceService } from './user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'art-quality-angular-project';

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }
  
  constructor(
    private userService:UserServiceService,
  ){
    this.userService.getProfileInfo().subscribe({
      error: () =>{
       this.userService.user = null; 
      }
    })
  }

}
