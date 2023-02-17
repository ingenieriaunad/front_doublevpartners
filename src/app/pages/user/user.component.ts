import { IUser } from './../../interfaces/user';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user:IUser|any={};
  name:string='';
  constructor(
    private usersService: UsersService,
  ) { }
  //obtiene la informacion de un usuario
  getUser(username:string){
    this.usersService.getUser(username)
                    .subscribe((res:IUser)=>{
                      this.user = res;
                    });
  }
  ngOnInit(): void{
    //obtiene el parametro id de la url
    this.name = window.location.pathname.split('/')[2];
    this.getUser(this.name);
  }
}
