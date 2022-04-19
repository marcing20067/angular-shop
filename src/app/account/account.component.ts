import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  isLoading = true;
  account$ = this.accountService.getAccount().pipe(tap(() => {
    this.isLoading = false;
  }));
  constructor(private accountService: AccountService) {}
}
