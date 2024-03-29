import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';
import { AlertComponent } from '../shared/alert/alert.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
// import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LoadingSpinner, CommonModule, AlertComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error!: string;
  // @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective;

  constructor(
    private authService: AuthService, 
    private router : Router ,
    // private componentFactoryResolver : ComponentFactoryResolver
    ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)

    } else {
      authObs = this.authService.signUp(email, password)
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes'])
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        // this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    )

    form.reset();
  }

  onHandleError(){
    this.error = null || '';
  }

  // showErrorAlert(message:string){
  //    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  //    const hostViewContainerRef = this.alertHost.viewContainerRef;
  //    hostViewContainerRef.clear();

  //    hostViewContainerRef.createComponent(alertCmpFactory);

  // }

   
}
