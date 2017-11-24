import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ratingUrl } from '../apiUrls';
import { Rating } from './rating';

@Injectable()
export class RatingService {

  constructor(
    private http: Http
  ) { }

  current_user_accesToken = localStorage.getItem('currentUser')
  curent_user_userId = localStorage.getItem('currentUserId')

  postrating(ratingData): Observable<Rating>{
     let headers = new Headers({ 'Content-Type': 'application/json'});
     let options = new RequestOptions({headers: headers}); 
    return this.http.post( ratingUrl + 'rateProduct?access_token=' + this.current_user_accesToken, JSON.stringify(ratingData), options).map((response: Response) => {
      return <Rating>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
  

}
