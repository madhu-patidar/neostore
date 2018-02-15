import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from './user.service'
import { User } from './user' 

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  @Input() user: User

  name:string
  editProfileForm: FormGroup
  first_name: FormControl
  last_name: FormControl
  gender: FormControl
  birth_date: FormControl
  phone_no: FormControl
  email: FormControl

  ngOnInit() {
    this.editProfileFormValidation()
    this.getCurrentUser()
  }

  editProfileFormValidation (){
    this.first_name = new FormControl('', [
      Validators.required
    ])
    this.last_name = new FormControl('', [
      Validators.required
    ])
    this.gender = new FormControl('', [
      Validators.required
    ])
    this.birth_date = new FormControl('', [
      Validators.required
    ])
    this.phone_no = new FormControl('', [
      Validators.required
    ])
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ])

    this.editProfileForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      birth_date: this.birth_date,
      phone_no: this.phone_no,
      email: this.email,
    })
  }


  getCurrentUser(){
    this.userService.getUser().subscribe(
      (response: User) => {
        this.user = response
        this.name = this.user.first_name + " " + this.user.last_name
        this.polpulateEditProfileForm(this.user)
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  polpulateEditProfileForm(user: User){
    if (this.editProfileForm) {
        this.editProfileForm.reset();
    }
    this.user = user
    this.editProfileForm.patchValue({
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      gender: this.user.gender,
      birth_date: new Date(this.user.birth_date).toISOString().split('T')[0],
      phone_no: this.user.phone_no,
      email: this.user.email,
    })
  }

  editProfile(formValues){
    console.log(formValues)
    let userInfo = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      gender: formValues.gender,
      email: formValues.email,
      phone_no: formValues.phone_no,
      birth_date: formValues.birth_date,
    }
    this.userService.updateUser(userInfo).subscribe(
      (response: User) => {
        this.router.navigate(['/user/profile'])
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }




}

