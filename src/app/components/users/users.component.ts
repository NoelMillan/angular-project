import {ConfirmationService} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ConfirmationService]
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  userSelected: User = {id: undefined, firstName: "", lastName: "", email: "", password: "", centersVisited: 0, reviews: 0}
  msgs: Message[] = [];
  display: boolean = false;

  constructor(public userService: UsersService, private confirmationService: ConfirmationService) {
    this.users = this.userService.users;
  }

  ngOnInit(): void {
  }

  confirm(user: User) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this user?',
        accept: () => {
          this.msgs = [{severity:'error', summary:'Deleted', detail:'You have deleted the user'}];
          this.delete(user);
          this.display = false;
      },
        reject: () => {
            this.msgs = [{severity:'warn', summary:'Rejected', detail:'You have rejected'}];
            this.display = false;
      }
    });
  }

  delete(user: User){
    this.users.splice(this.users.indexOf(user), 1);
  }

  showDialog(user: User) {
    this.display = true;
    this.userSelected = user;
  }

}
