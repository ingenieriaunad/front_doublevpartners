import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/users.service';
import { IItem, IUsers } from '../../interfaces/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title    = 'Proyecto usuarios';
  faSearch = faSearch;
  inputSearch        :string   = ''           ;
  items              : any[]   = []           ;
  totalItems         :number   = 0            ;
  currentPage        :number   = 1            ;
  itemsPerPage       :number   = 10           ;
  itemsPerPageOptions:number[] = [10, 20, 30] ;
  maxSize            :number   = 5            ;

  constructor(
    private router      : Router      ,
    private usersService: UsersService
    ) { }


  verItem(item: IItem) {
    //nueva pestana usando el login del usuario y router
    window.open(`/user/${item.login}`, '_blank');
  }

  //funcion que se ejecuta al cambiar de pagina
  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.searchUser();
  }
  //funcion que obtiene la lista de usuarios buscados
  searchUser() {
    const search = {
      name    : this.inputSearch ,
      per_page: this.itemsPerPage,
      page    : this.currentPage
    };
    this.usersService.getUsers(search)
    .subscribe((res:IUsers)=>{
      this.items = res.items;
      this.totalItems = res.total_count;
    });
  }

  //resetea los valores de la busqueda
  resetSearch(){
    if(this.inputSearch.length!=0){
      return;
    }
    this.items = [];
    this.totalItems = 0;
    this.currentPage = 1;
  }
}
