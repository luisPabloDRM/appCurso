import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind:string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(
        private httpClient : HttpClient
    ){}

    signUp(email: string , password: string){
       return this.httpClient.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBThLRIT30tQGgd-4rC1XP0mqhNSaNKf5M ', 
          {
            email:email,
            password:password,
            returnSecureToken: true
          }
        );
    }
}