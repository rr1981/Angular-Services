import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService , private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New status ' + status)
    );
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id , status);
  }
}