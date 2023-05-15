import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logService: LoggingService, private accService: AccountService){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accService.updateStatus(this.id, status)
    // console.log('A server status changed, new status: ' + status);
    this.logService.logStatusChange(status);
  }
}
