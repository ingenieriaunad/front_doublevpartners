import { Injectable } from '@angular/core';
import { ISearch, IUser, IUsers } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://api.github.com';
  private pathSearch='/search/users?q=';
  private pathUser='/users/';
  constructor(private http:HttpClient) {
  }
  //obtiene la lista de usuarios de la busqueda
  getUsers(search:ISearch) {
    return this.http.get<IUsers>(`${this.url}${this.pathSearch}${search.name}&per_page=${search.per_page}&page=${search.page}`);
  }
  //obtiene la informacion de un usuario
  getUser(username:string) {
    return this.http.get<IUser>(`${this.url}${this.pathUser}${username}`);
  }
  getFollowers(usernames:string[]) {
    let totalFollowres:number[]=[];
    let makeRequest=[];
    for (const username of usernames) {
      makeRequest.push(this.getUser(username));
    }
    return forkJoin(makeRequest);
  }
}
