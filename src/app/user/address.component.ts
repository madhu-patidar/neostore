import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
	
	addresses:any
  constructor(private userService:UserService) { }

  ngOnInit() {
  	this.getUserAddresses()
  }
	
	getUserAddresses(){
		this.userService.getUserAddresses().subscribe((
		response: any) => {
			this.addresses = response;
			console.log("this.addresses")
			console.log(this.addresses)
			console.log(response)
		})
	}
}
