import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LocalStorage } from 'src/app/core/injection-token';
import { passwordDontMatch } from 'src/app/shared/validators';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements OnDestroy{
  passwordIsIncorrect: boolean = false;
  passwordDontMatch = passwordDontMatch;
  killSubscription = new Subject();
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      oldPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, passwordDontMatch(
        () => this.form?.get('newPassword'), this.killSubscription
      )]]
    });
  }
  


  editProfile(): void {
    if (this.form.invalid) { return; }
    this.userService.editProfile(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.passwordIsIncorrect = true;
      }
    })
  }
  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }

}
