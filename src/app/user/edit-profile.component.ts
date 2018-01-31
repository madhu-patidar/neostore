import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from "angular2-social-login";

import { UserService } from './user.service'
import { AuthServiceLocal } from '../auth.service';
import { User } from './user'


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  user:User
  userInfo:User

  editProfileForm: FormGroup;
  private email: FormControl
  private first_name: FormControl
  private last_name: FormControl
  private birth_date: FormControl
  private phoneNumber: FormControl
  private gender: FormControl
  name:string

  constructor(
      private router: Router,
      private userService: UserService,
      private authServiceLocal: AuthServiceLocal,
  ) { }


  ngOnInit(){
     this.getUser()
    this.editFormValidation()
  }

  getUser(){
    this.userService.getUser().subscribe((
    	response: any) => {
    		this.userInfo = response;
    		console.log(this.userInfo)
    		 this.user.birth_date = new Date(response.birth_date).toDateString()
    		this.name = this.user.first_name +" "+ this.user.last_name ;
    })
  }

  editFormValidation(){

    this.email = new FormControl(this.userInfo.email, [
      Validators.email
    ])
    this.phoneNumber = new FormControl(this.userInfo.phoneNumber, [
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
    this.gender = new FormControl(this.userInfo.gender, [
      
    ])
    this.first_name = new FormControl(this.userInfo.first_name, [
      
    ])
    this.last_name = new FormControl(this.userInfo.last_name, [
      
    ])
    this.birth_date = new FormControl(this.userInfo.birth_date, [
      
    ])


    this.editProfileForm = new FormGroup({

      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      birth_date: this.birth_date,
      phoneNumber: this.phoneNumber,
      gender: this.gender    
    })
 }
  onSubmit(formValues){
  	debugger
    console.log(formValues)
    let userDetails = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      birth_date: formValues.birth_date,
      gender: formValues.gender,
      email: formValues.email,
      phone_no: formValues.phoneNumber,
    }

    this.userService.updateUser(userDetails).subscribe(
      (response: any) => {
        this.router.navigate(['/user/profile'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

}
