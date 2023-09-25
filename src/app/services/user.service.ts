import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User} from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new UserService());
  constructor() {
    this.userObservable = this.userSubject.asObservable();
   }

   public get currentUser():User{
    return this.userSubject.value;
  }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe;
    TagsComponent({
      next: (user) =>{

      },
      error: (errorResponse) => {

      }
      
    })
    );
   } 
}
