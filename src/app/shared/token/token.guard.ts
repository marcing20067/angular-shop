import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.tokenService.getTokenListener().pipe(
      take(1),
      switchMap((token) => {
        if (token) {
          return of(true);
        }
        return of(this.router.createUrlTree(['/auth/login']));
      })
    );
  }
}
