import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ReqresService } from '../services/reqres.service';
import { User } from '../types/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService, public reqresService: ReqresService) {}
  
  listUsers: User[] = [];

  ngOnInit(): void {
    // Call users api
    this.reqresService.getUsers().subscribe(res => {
      const { data } = res;
      this.listUsers = data;
    })
  }
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
