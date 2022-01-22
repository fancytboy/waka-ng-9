import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../types/customer';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestore: AngularFirestore) { }
  create(customer: Customer){
    return this.firestore.collection('customers').add(customer)
  }

  find(id: string): Observable<any>{
    return this.firestore.collection('customers').doc(id).valueChanges({ idField: 'id'});
  }
  
  read(): Observable<any>{
    return this.firestore.collection('customers').valueChanges({idField: 'id'});
  }

  update(id: string, customer: Customer){
    return this.firestore.collection('customers').doc(id).update(customer)
  }

  delete(id: string){
    return this.firestore.collection('customers').doc(id).delete()
  }
}
