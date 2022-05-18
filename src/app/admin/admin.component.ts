import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AdminService } from './shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isLoading = true;
  account$ = this.adminService.getAdmin().pipe(tap(() => {
    this.isLoading = false;
  }));
  constructor(private adminService: AdminService) {}

}
