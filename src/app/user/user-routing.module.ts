import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: '/',
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  },
  {
    path: 'edit',
    component: EditProfileComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/edit',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
