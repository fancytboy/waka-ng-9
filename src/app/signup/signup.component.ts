import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn = false;

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignup(email: string, password: string, conPassword: string){
    if (password === conPassword){
      await this.firebaseService.create(email, password);
      if (this.firebaseService.isLoggedIn) 
      this.isSignedIn = true
    }
    
  }

}
