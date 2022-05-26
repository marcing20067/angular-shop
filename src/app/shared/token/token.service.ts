import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenData } from './token-data.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenData$ = new BehaviorSubject<TokenData | null>(null);
  tokenData: TokenData | null = null;
  constructor(private http: HttpClient) {
    const tokenData = JSON.parse(localStorage.getItem('tokenData') || 'null');
    this.updateTokenData(tokenData);
  }

  getTokenListener() {
    return this.tokenData$
      .asObservable()
      .pipe(map((token) => (token ? token.accessToken : '')));
  }

  setTokenData(data: TokenData) {
    const tokenData = { ...data };
    const now = Date.now();
    tokenData.accessExpiresIn = now + tokenData.accessExpiresIn;
    tokenData.refreshExpiresIn = now + tokenData.refreshExpiresIn;
    this.updateTokenData(tokenData);
  }

  checkValidity() {
    const now = Date.now();
    const TIME_MARGIN_IN_MS = 180000;

    if (
      !this.tokenData ||
      !this.tokenData.refreshExpiresIn ||
      !this.tokenData.accessExpiresIn
    ) {
      return of(false);
    }

    if (now > this.tokenData.refreshExpiresIn + TIME_MARGIN_IN_MS) {
      return of(false);
    }

    if (now < this.tokenData.accessExpiresIn + TIME_MARGIN_IN_MS) {
      return of(true);
    }

    return this.postRefresh().pipe(
      switchMap(() => {
        return of(true);
      }),
      catchError(() => {
        this.updateTokenData(null);
        return of(false);
      })
    );
  }

  private postRefresh() {
    return this.http
      .post<TokenData>(environment.BACKEND_URL + 'auth/refresh', {})
      .pipe(
        tap((tokenData) => {
          this.setTokenData(tokenData);
        })
      );
  }

  private updateTokenData(data: TokenData | null) {
    localStorage.setItem('tokenData', JSON.stringify(data));
    this.tokenData$.next(data);
    this.tokenData = data;
  }
}
