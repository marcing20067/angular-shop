import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  login(admin: Admin) {
    return this.http.get<{ accessToken: string }>(
      environment.BACKEND_URL + 'account/login'
    );
  }

  getAdmin() {
    return this.http.get<Admin>(environment.BACKEND_URL + 'account');
  }
}
