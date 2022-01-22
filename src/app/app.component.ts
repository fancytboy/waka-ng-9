import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  isSignedIn = false;
  showSignIn = true;
  
  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
  }
  logout(){
    this.isSignedIn = false;
    this.firebaseService.logout()
    this.isLogout.emit();
  }
}
