import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { TokenService } from 'src/app/shared/token/token.service';
import { AdminValidators } from '../shared/admin-validators';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  loginForm = this.fb.group({
    email: ['', AdminValidators.email],
    password: ['', AdminValidators.password],
  });

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  onSubmit() {
    const loginData = this.loginForm.value;
    this.adminService
      .login(loginData)
      .pipe(take(1))
      .subscribe(({ accessToken }) => {
        this.tokenService.setToken(accessToken);
        this.router.navigate(['/products']);
      });
  }
}
