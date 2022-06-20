import { Observable } from 'rxjs';
import { collectionData } from 'rxfire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  public async addUser(user: User) {
    await addDoc(collection(this.firestore, 'users'), user);
  }

  getUsers(): Observable<User[]> {
    const collectionRef = collection(this.firestore, 'users');
    return collectionData(collectionRef, {idField: 'userId'}) as Observable<User[]>;
  }
  async updateUser(user: User) {
    await setDoc(doc(this.firestore, `users/${user.userId}`), user);
  }
}
