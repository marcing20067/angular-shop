import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenData } from 'src/app/shared/token/token-data.model';
import { environment } from 'src/environments/environment';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  login(admin: Admin) {
    return this.http.post<TokenData>(environment.BACKEND_URL + 'auth/login', admin);
  }

  getAdmin() {
    return this.http.get<Admin>(environment.BACKEND_URL + 'account');
  }
}
