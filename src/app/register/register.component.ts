
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EqualTextValidator } from "angular2-text-equality-validator";

import { AuthServiceLocal } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  user:any
  signupForm: FormGroup;
  private email: FormControl
  private password: FormControl
  private confirmPassword: FormControl
  private phoneNumber: FormControl
  private gender: FormControl

  constructor(
      private router: Router,
      private authServiceLocal: AuthServiceLocal,
  ) { }


  ngOnInit(){
    if(localStorage.currentUser){
       this.router.navigate(['']);
    }
    this.registerFormValidation()

  }

 registerFormValidation(){

    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
    this.confirmPassword = new FormControl('', [
      Validators.required
    ])
    this.phoneNumber = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
    this.gender = new FormControl('', [
      Validators.required
    ])

    this.signupForm = new FormGroup({

      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phoneNumber: this.phoneNumber,
      gender: this.gender    
    })
 }
  onSubmit(formValues){
    console.log(formValues)
    let userInfo = {
      first_name: '',
      last_name: '',
      gender: formValues.gender,
      email: formValues.email,
      password: formValues.password,
      phone_no: formValues.phoneNumber,
      username: '',
      role: 'AppUser',
      orderId: '',
      shoppingcartId: '',
      is_active: true
    }

    this.authServiceLocal.register(userInfo).subscribe(
      (response: any) => {
        this.router.navigate(['/login'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }
}
