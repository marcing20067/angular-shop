import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthLoginComponent, AuthSignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill', hideRequiredMarker: true },
    },
  ],
})
export class AuthModule {}
