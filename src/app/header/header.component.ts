import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUserId:any
  user:any
  constructor( private authService:AuthService, private router:Router) { }

  ngOnInit() {
   this.currentUserId = localStorage.currentUser;
    console.log(  this.currentUser)
   console.log( localStorage)
  }

  logout(){
    alert("in logout")
     this.authService.logout().subscribe(
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
