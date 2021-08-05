import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/user/user-service.service';

@Injectable()
export class AuthActivate implements CanActivate {
  isLogged: boolean = false;

  constructor(
    private router: Router,
    private userService: UserServiceService,
    ) {
    this.userService.getProfileInfo().subscribe({
      next: () => {
        this.isLogged = true;
      },
      error: () =>{
       this.userService.user = null; 
      }
    });
  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):| boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { authenticationRequired, authenticationFailureRedirectUrl } = route.data;
    if (
      typeof authenticationRequired === 'boolean' &&
      this.isLogged
    ) {
      return true;
    }
    return this.router.parseUrl(authenticationFailureRedirectUrl) || '/';
  }
 
}
