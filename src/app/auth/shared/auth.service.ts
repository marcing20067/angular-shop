import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { NewUser } from './new-user.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    const response = new HttpResponse({
      body: {},
    });

    return of(response);
  }

  signup(newUser: NewUser) {
    const response = new HttpResponse({
      body: {},
    });

    return of(response);
  }
}
