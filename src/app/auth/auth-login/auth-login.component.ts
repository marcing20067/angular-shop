import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthValidators } from '../shared/auth-validators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  loginForm = this.fb.group({
    email: ['',  AuthValidators.email],
    password: ['', AuthValidators.password],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const loginData = this.loginForm.value;
    this.authService.login(loginData).pipe(take(1)).subscribe(() => {
      this.router.navigate(['/products'])
    });
  }
}
