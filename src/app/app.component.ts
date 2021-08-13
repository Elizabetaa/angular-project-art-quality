import { UserServiceService } from './user/user-service.service';
import { Component, HostBinding } from '@angular/core';
import { trigger, query,transition,stagger, animate, style } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),  
    ]),
  ]
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
