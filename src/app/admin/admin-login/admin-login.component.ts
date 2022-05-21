import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TokenService } from 'src/app/shared/token/token.service';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
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
      .subscribe((data) => {
        this.tokenService.setTokenData(data);
        this.router.navigate(['/admin']);
      });
  }
}
