import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "console";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

 export interface AuthResponseData {
            kind?:string;
            idToken: string;
            email: string;
            refreshToken: string;
            expiresIn: string;
            localId: string; 
            registered? : boolean;
        }



@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(
        private httpClient : HttpClient
    ){}

    signUp(email: string , password: string){
       return this.httpClient.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBThLRIT30tQGgd-4rC1XP0mqhNSaNKf5M', 
          {
            email:email,
            password:password,
            returnSecureToken: true
          }
        ).pipe(catchError( errorRes => {
            let errorMessage = 'An unknow error ocurred';
            if (!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage)
            }
            switch (errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
            }
            return throwError(errorMessage)
        }))
    }

    login(email: string , password: string){
        return this.httpClient.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBThLRIT30tQGgd-4rC1XP0mqhNSaNKf5M',
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        );
    }
}