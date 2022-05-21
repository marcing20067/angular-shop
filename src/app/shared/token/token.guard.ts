import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> {
  return this.tokenService.checkValidity().pipe(
      take(1),
      switchMap((isAuth) => {
        if (isAuth) {
          return of(true);
        }
        return of(this.router.createUrlTree(['/admin/login']));
      })
    );
  }
}
