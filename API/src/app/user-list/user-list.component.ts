import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

/*   //Atributos
  users:Array<User> = new Array<User>(); */

  //Construtor
  constructor(private userService:UserService) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  users:User[];
  ngOnInit() {
    this.findAll();
  }

  //Começa a minha aplicação
  findAll(){
    this.userService.getAll().subscribe((userOut: User[])=>{
      this.users = userOut;
    });
  }

/*   btn1Click(){
    this.userService.getAll().subscribe((userOut: User[])=>{
      this.users = new Array<User>();
      this.users.push(userOut[0]);
    });
  }

  btnUsersClick(){
    this.findAll();
  } */
}
