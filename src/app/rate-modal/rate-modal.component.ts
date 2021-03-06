import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Rating } from '../rating/rating'
import { Product } from '../product/product'
import { AuthGuard } from '../guards/auth.guard'

import { RatingService } from '../rating/rating.service'

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css']
})
export class RateModalComponent implements OnInit {
	 public putRating

   @Input() product:Product

  curent_user_userId = localStorage.getItem('currentUser')
  constructor(
    private ratingService: RatingService, 
    private authGuard:AuthGuard,
    private router:Router
  	) { }

  ngOnInit() {
  }

  onClick(a){
      this.putRating=a.rating;
      console.log(this.putRating);
  }

   public closeFirstModal() {
    
      var data={
        rating:this.putRating,
        user_id:this.curent_user_userId,
        product_id:this.product.id
      }
    console.log("dada before insert",data)

    this.ratingService.postrating(data).subscribe(
      (response: Rating) => {
          console.log("dada after insert",response)
        return response
      },
      (error: Error) => {
        return error
      }
    )
  }

  isAuthenticate(){

  	 if(localStorage.getItem('currentUser') == undefined){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        return true;
      } 
  }

}
