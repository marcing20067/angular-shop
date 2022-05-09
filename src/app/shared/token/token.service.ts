import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token$ = new BehaviorSubject(localStorage.getItem('token') || '');

  getTokenListener() {
    return this.token$.asObservable();
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token$.next(token);
  }
}
