import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { error } from 'console';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LoadingSpinner, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error! :string;

  constructor( private authService : AuthService){}


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if( this.isLoginMode){
      //...
    }else {
        this.authService.signUp(email, password).subscribe(
          resData => {
            console.log(resData)
            this.isLoading = false;
        }, 
          error => {
            console.error(error);
            this.isLoading = false;
            this.error = 'An error ocurred!'
        }
      );
    }

    form.reset();
  }
}
