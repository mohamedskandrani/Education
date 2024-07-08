import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }
  signUp(user: any) {
    return this.http.post<{ isAdded: boolean }>(this.userUrl+'/signUp', user);
  }
  logIn(user: any){
    return this.http.post<{msg:string;user:any}>(this.userUrl+'/login',user);
  }
}


