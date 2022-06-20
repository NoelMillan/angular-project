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

  userSelected: User = {userId: undefined, firstName: "", lastName: "", email: "", centersVisited: 0, reviews: [], isActive: true}
  msgs: Message[] = [];
  displaydelete: boolean = false;
  displayuser: boolean = false;

  users: User[] = [];

  password = "";
  user: User = {userId: undefined, centersVisited: 0, reviews: [], email: "", firstName: "", lastName: "", isActive: true}

  constructor(public userService: UsersService, private confirmationService: ConfirmationService, private auth: Auth) {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  ngOnInit(): void {
  }

  confirm(user: User) {
    this.confirmationService.confirm({
        message: '¿Estás seguro de que deseas deshabilitar este usuario?',
        accept: () => {
          this.msgs = [{severity:'error', summary:'Deshabilitado', detail:`Has deshabilitado el usuario `+ user.email}];
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

  confirm2(user: User) {
    this.confirmationService.confirm({
        message: '¿Estás seguro de que deseas habilitar este usuario?',
        accept: () => {
          this.msgs = [{severity:'success', summary:'Habilitado', detail:`Has habilitado el usuario `+ user.email}];
          this.approve(user);
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
    user.isActive = false;
    this.userService.updateUser(user);
  }

  approve(user: User){
    user.isActive = true;
    this.userService.updateUser(user);
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
    const connectionSuccess = await this.register(this.user.email, this.password)

    if(connectionSuccess){
      this.user.userId = this.auth.currentUser?.uid
      this.userService.addUser(this.user)
    }
    else{
      console.log("error")
    }
  }

}
