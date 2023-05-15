import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {name: 'Master Account', status: 'active'},
    {name: 'Test Account', status: 'inactive'},
    {name: 'Hidden Account', status: 'unknow'},
  ];

  constructor(private logService: LoggingService) { }

  addAccount(name: string, status: string){
    this.accounts.push({name, status});
    this.logService.logStatusChange(status);
  }

  updateStatus(position: number, status: string){
    this.accounts[position].status = status;
    this.logService.logStatusChange(status);
  }

}
