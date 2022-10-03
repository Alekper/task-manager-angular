import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../Models/newUser';
import { User } from '../Models/user';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) {


  }
  
  //  This code below supports JWT authorization but I didn't have time to implement back-end part


  // public signUp(user: NewUser): Observable<any> {
  //   return this.http.post<any>('http://localhost:8080/signup', user);

  // }
  // token:string|null = localStorage.getItem('token')

  // public signIn(user: User): Observable<string> {
  //   return this.http.post('http://localhost:8080/signin', user, { responseType: 'text' });
  // }
  // loginCheck() {
  //   console.log(this.token);

  //   if (this.token)
  //     this.isLoggedIn = true
  // }
  // public getData(): Observable<any> {
  //   return this.http.get('http://localhost:8080/data', { responseType: 'text' });
  // }


  public signIn(): Observable<any> {
    return this.http.get('https://6337e881132b46ee0be70d2d.mockapi.io/users')
  }
  public signUp(user: NewUser): Observable<any> {
    return this.http.post<any>('https://6337e881132b46ee0be70d2d.mockapi.io/users', user);
  }

  public isLoggedIn(): boolean {
    return !!(localStorage.getItem('username') && localStorage.getItem('password'))
  }



  public getUserData(id: string | null) {
    return this.http.get(`https://6337e881132b46ee0be70d2d.mockapi.io/users/${id}`)

  }


}
