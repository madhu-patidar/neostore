import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { AuthServiceLocal } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUserId:any
  user:any
  constructor( private authServiceLocal:AuthServiceLocal, private router:Router) { }

  ngOnInit() {
    this.currentUserId = localStorage.currentUser;
    console.log( this.currentUserId)
    console.log( localStorage)
  }

  logout(){
    alert("in logout")
    this.authServiceLocal.logout().subscribe(
      (response: any) => {
        this.router.navigate(['']);
        location.reload();
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

}
