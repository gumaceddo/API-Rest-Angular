import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(id: number) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
  getById(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}