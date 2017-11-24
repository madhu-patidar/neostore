
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Category } from './category';
import { Product } from '../product/product';
import {categoryUrl} from '../apiUrls'

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

	getPopularCategories(): Observable<Category>{
    return this.http.get(categoryUrl + '?filter={"include":"images" ,"limit":"5", "skip":"0"}').map((response: Response) => {                                

      return <Category>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

  getCategories(): Observable<Category>{
    return this.http.get(categoryUrl+'?filter={"include":"images" ,"limit":"5", "skip":"0"}').map((response: Response) => {                                

      return <Category>response.json()
    }).catch(this.handleError)
  }

}
