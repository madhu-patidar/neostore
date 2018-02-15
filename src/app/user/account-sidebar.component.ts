import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'account-sidebar',
  templateUrl: './account-sidebar.component.html',
  styleUrls: ['./account-sidebar.component.css']
})
export class AccountSidebarComponent implements OnInit {

  constructor() { }

  @Input() image;

  ngOnInit() {
  console.log(this.image.ImgURL)
  }

}
