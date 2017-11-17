import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';


@Injectable()
export class AuthService {

private headers: Headers = new Headers({'Content-Type': 'application/json'});

userUrl:string="http://180.149.245.182:3008/api/user_accounts/"

 
constructor(private http: Http) { }



  	login(user): Observable<any>{
    return this.http.post(this.userUrl +'login', user, {headers: this.headers}).map((response: Response) => {                                
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

  
  
  private handleError(error: Response | any){
     console.log('an error '+ error);
     return Observable.throw(error.statusText);
   }

  
logout() {
    this.accessToken = localStorage.getItem('currentUser')
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.userUrl + 'logout?access_token=' + this.accessToken, options).map( (response: Response)=>{
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserId');
      return response.json()
    }).catch(this.handleError)
  }

}
