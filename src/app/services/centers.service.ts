import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Center } from './../models/center';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private firestore: Firestore) { }

  getCenters(): Observable<Center[]>{
    const collectionRef = collection(this.firestore, 'centers');
    return collectionData(collectionRef, {idField: 'centerId'}) as Observable<Center[]>;
  }
}
