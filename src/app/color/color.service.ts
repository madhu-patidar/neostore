import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Product } from '../product/product';
import { productUrl, colorUrl } from '../apiUrls'

@Injectable()
export class ColorService {
  constructor(private http: Http) { }

  getColors(): Observable<any>{
    return this.http.get(colorUrl).map((response: Response) => {                                
      return <any>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
