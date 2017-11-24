
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { AuthService } from '../auth.service';

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
      private authService: AuthService,
  ) { }


   ngOnInit(){
    if(localStorage.currentUser){
       this.router.navigate(['']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9\-_]{0,40}$/)]]
    });
    
  }


  onSubmit(){
  this.authService.login(this.loginForm.value).subscribe(
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

}





