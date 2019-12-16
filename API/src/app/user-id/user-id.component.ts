import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
   id: number
   user: User = new User(0, '', '', '',null, '', '', null)
   
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  searchClick(){
    this.UserService.getById(this.id).subscribe((userOut: User)=>{
      this.user = userOut;
    })
  }

}