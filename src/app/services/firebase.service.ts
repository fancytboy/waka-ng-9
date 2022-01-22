import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
  async create(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
  async logout(){
    await this.firebaseAuth.signOut()
    .then((res) => {
      this.isLoggedIn = false;
      localStorage.removeItem('user');
    })
  }
}
