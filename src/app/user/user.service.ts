import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { userUrl } from '../apiUrls'
import { userAddressesUrl } from '../apiUrls'

import { User } from './user'


@Injectable()
export class UserService {
accessToken:any
private headers: Headers = new Headers({'Content-Type': 'application/json'});
 
constructor(private http: Http) { }


  current_user_accesToken = localStorage.getItem('currentUser')
  curent_user_userId = localStorage.getItem('currentUserId')

  getUser(): Observable<{} | User>{
    return this.http.get( userUrl + "/" + this.curent_user_userId + '?access_token=' + this.current_user_accesToken + '&&filter={"include":"images"}').map((response: Response) => {
      return <{} | User>response.json()
    }).catch(this.handleError)
  }

  updateUser(user): Observable<any>{
    return this.http.patch(userUrl  + "/" + this.curent_user_userId + "?access_token=" + this.current_user_accesToken,  JSON.stringify(user) , {headers: this.headers}).map((response: Response) => {
      debugger
      let res = response.json();
       if (res.userId ){
        return response;
       }
       else{
        return response;
       }
    }).catch(this.handleError)
  }

  getUserAddresses(): Observable<any>{
    return this.http.get(userAddressesUrl + this.curent_user_userId).map((response: Response) => {
      debugger
      let res = response.json();
      return res
    }).catch(this.handleError)
  }



  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
