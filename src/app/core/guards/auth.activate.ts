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
    
  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):| boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const { authenticationRequired, authenticationFailureRedirectUrl, isAdmin } = route.data;
    if( typeof isAdmin === 'boolean' && this.userService.isAdmin){
      return true;
    }
    if (
      typeof authenticationRequired === 'boolean' &&
      this.userService.isLogged == authenticationRequired
    ) {
      return true;
    }
    return this.router.parseUrl(authenticationFailureRedirectUrl) || '/';
  }
 
}