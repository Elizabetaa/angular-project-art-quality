import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserServiceService } from './user-service.service';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserServiceService
  ]
})
export class UserModule { }
