import { Observable } from 'rxjs';
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

  userSelected: User = {id: undefined, firstName: "", lastName: "", email: "", password: "", centersVisited: 0, reviews: 0}
  msgs: Message[] = [];
  displaydelete: boolean = false;
  displayuser: boolean = false;

  users: User[] = [];

  user: User = {centersVisited: 0, reviews: 0, email: "", firstName: "", lastName: "", password: ""}

  constructor(public userService: UsersService, private confirmationService: ConfirmationService) {
    // this.users = this.userService.users;
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  ngOnInit(): void {
  }

  confirm(user: User) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this user?',
        accept: () => {
          this.msgs = [{severity:'error', summary:'Deleted', detail:'You have deleted the user'}];
          this.delete(user);
          this.displaydelete = false;
          this.confirmationService.close()
      },
        reject: () => {
            this.msgs = [{severity:'warn', summary:'Rejected', detail:'You have rejected'}];
            this.displaydelete = false;
            this.confirmationService.close()
      }
    });
  }

  delete(user: User){
    this.users.splice(this.users.indexOf(user), 1);
  }

  showDialogDelete(user: User) {
    this.displaydelete = true;
    this.userSelected = user;
  }

  addUser(){
    this.userService.addUser(this.user)
  }

}
