import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { switchMap, take } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.tokenService.getTokenListener().pipe(
      take(1),
      switchMap((token) => {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(authReq);
      })
    );
  }
}
