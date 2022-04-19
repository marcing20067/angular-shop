import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount() {
    const response: Account = {
      email: 'mail@example.com',
      password: '******',
    };
    return of(response).pipe(delay(300));
  }
}
