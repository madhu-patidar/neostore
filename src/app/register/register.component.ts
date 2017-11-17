import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
      if(localStorage.currentUser){
       this.router.navigate(['']);
       location.reload();
    }
  }

}
