import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any
  name:string

  ngOnInit() {
    this.getUser()
  }
  

  getUser(){
    this.userService.getUser().subscribe((
    	response: any) => {
    		this.user = response;
        console.log(this.user)
    		this.user.birth_date = new Date(response.birth_date).toDateString()
    		this.name = this.user.first_name +" "+ this.user.last_name ;
    })
  }
}
