import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injection-token';
import { AuthActivate } from './guards/auth.activate';
import { UserServiceService } from '../user/user-service.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],

  providers: [
    {provide: LocalStorage,
      useValue:window.localStorage
    },
    AuthActivate,
    UserServiceService,
  ]
})
export class CoreModule {}
