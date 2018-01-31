import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from "angular2-social-login";

import { AuthServiceLocal } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user:any
  loginForm: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  constructor(
      private router: Router,
      private authServiceLocal: AuthServiceLocal,
      private authservice: AuthService
  ) { }


   ngOnInit(){
    if(localStorage.currentUser){
       this.router.navigate(['']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    
  }


  onSubmit(){
    this.authServiceLocal.login(this.loginForm.value).subscribe(
      (response: any) => {
       this.router.navigate(['']);
        location.reload();
        this.user = response 
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

   signIn(provider){
    this.authservice.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.authServiceLocal.socialLogin(data).subscribe(
          (response: any) => {
           this.router.navigate(['']);
            location.reload();
            this.user = response 
            return response
          },
          (error :Error) => {
            return error
          }
        )
      }
    )
  }

}





