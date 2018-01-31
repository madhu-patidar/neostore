import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { userUrl } from './apiUrls'


@Injectable()
export class AuthServiceLocal {
accessToken:any
private headers: Headers = new Headers({'Content-Type': 'application/json'});
 
constructor(private http: Http) { }

  login(user): Observable<any>{
    return this.http.post(userUrl +'/login', user, {headers: this.headers}).map((response: Response) => {                                
       let res = response.json();
       if (res.userId ){
         localStorage.setItem('currentUserId', res.userId);
         localStorage.setItem('currentUser',  res.id);
        return response;
       }
       else{
         return response;
       }
    }).catch(this.handleError)
  }

  socialLogin(user): Observable<any>{
    return this.http.post(userUrl +'/loginSocial', user, {headers: this.headers}).map((response: Response) => {                                
       let res = response.json();
       if (res.userId ){
         localStorage.setItem('currentUserId', res.userId);
         localStorage.setItem('currentUser',  res.id);
        return response;
       }
       else{
         return response;
       }
    }).catch(this.handleError)
  }

  register(user): Observable<any>{
    return this.http.post(userUrl, JSON.stringify(user), {headers: this.headers}).map((response: Response) => {                                
       let res = response.json();
       if (res.userId ){
        return response;
       }
       else{
         return response;
       }
    }).catch(this.handleError)
  }

  
  
  private handleError(error: Response | any){
     console.log('an error '+ error);
     return Observable.throw(error.statusText);
   }

  
  logout() {
    this.accessToken = localStorage.getItem('currentUser')
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(userUrl + '/logout?access_token=' + this.accessToken, options).map( (response: Response)=>{
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserId');
      return response.json()
    }).catch(this.handleError)
  }

}
