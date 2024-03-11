import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  kind?: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();

  constructor(
    private httpClient: HttpClient,
    private router : Router
    ) {}

  signUp(email: string, password: string) {
    return this.httpClient
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBThLRIT30tQGgd-4rC1XP0mqhNSaNKf5M',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.expiresIn,
            resData.localId,
            +resData.idToken
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBThLRIT30tQGgd-4rC1XP0mqhNSaNKf5M',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.expiresIn,
            resData.localId,
            +resData.idToken
          );
        })
      );
  }
// Comento esta función pq me da problemas con el tema del local storage
  // autoLogin(){
  //   const userData:{
  //     email: string,
  //     id: string,
  //     _token: string,
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData') || '');
  //   if(!userData){
  //     return;
  //   }
  //   const loadedUser = new User (userData.email,userData.id, userData._token, new Date(userData._tokenExpirationDate));

  //   if(loadedUser.token){
  //     this.user.next(loadedUser)
  //   }
  // }

  logout(){
    this.user.next(null || undefined);
    this.router.navigate(['/auth'])
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error ocurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          ' The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
    }
    return throwError(errorMessage);
  }
}
