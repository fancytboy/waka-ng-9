import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(public httpClient: HttpClient) { }
  getUsers(): Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users/")
  }
}
