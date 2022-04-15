import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthValidators } from '../shared/auth-validators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export class AuthSignupComponent {
  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', AuthValidators.email],
    password: ['', AuthValidators.password],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const signupData = this.signupForm.value;
    this.authService
      .signup(signupData)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
  }
}
