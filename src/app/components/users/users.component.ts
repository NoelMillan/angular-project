import { Observable } from 'rxjs';
import {ConfirmationService} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Message } from 'src/app/models/message';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ConfirmationService]
})
export class UsersComponent implements OnInit {

  userSelected: User = {userId: undefined, firstName: "", lastName: "", email: "", password: "", centersVisited: 0, reviews: []}
  msgs: Message[] = [];
  displaydelete: boolean = false;
  displayuser: boolean = false;

  users: User[] = [];

  user: User = {centersVisited: 0, reviews: [], email: "", firstName: "", lastName: "", password: ""}

  constructor(public userService: UsersService, private confirmationService: ConfirmationService, private auth: Auth) {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  ngOnInit(): void {
  }

  confirm(user: User) {
    this.confirmationService.confirm({
        message: '¿Estás seguro de que deseas eliminar este usuario?',
        accept: () => {
          this.msgs = [{severity:'error', summary:'Eliminado', detail:`Has eliminado el usuario `+ user.email}];
          this.delete(user);
          this.displaydelete = false;
          this.confirmationService.close()
      },
        reject: () => {
            this.msgs = [{severity:'warn', summary:'Cancelado'}];
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

  register(email:string, password: string): Promise<boolean>{
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(
        () => true,
        error => {
          console.error(error)
          return false
        }
      )
  }

  async addUser(){
    const connectionSuccess = await this.register(this.user.email, this.user.password)

    if(connectionSuccess){
      this.userService.addUser(this.user)
    }
    else{
      console.log("error")
    }
  }

}
