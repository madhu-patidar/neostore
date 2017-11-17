
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Category } from './category';
import { Product } from '../product/product';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

    categoryUrl:string="http://180.149.245.182:3008/api/categories"


	getPopularCategories(): Observable<Category>{
    return this.http.get(this.categoryUrl + '?filter={"include":"images" ,"limit":"5", "skip":"0"}').map((response: Response) => {                                

      return <Category>response.json()
    }).catch(this.handleError)
  }

    handleError(error: Response) { 
    return Observable.throw(error.json());
  }

    getCategories(): Observable<Category>{
    return this.http.get(this.categoryUrl+'?filter={"include":"images" ,"limit":"5", "skip":"0"}').map((response: Response) => {                                

      return <Category>response.json()
    }).catch(this.handleError)
  }

 getCategoryProducts(categoryId:string): Observable<any>{
    return this.http.get(this.categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getCostAscendingOrderProducts(categoryId:string): Observable<any>{
    return this.http.get(this.categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_cost  ASC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getCostDescendingOrderProducts(categoryId:string): Observable<any>{
    return this.http.get(this.categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_cost  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

    getRatingDescendingOrderProductsWithCategory(categoryId:string): Observable<any>{
    return this.http.get(this.categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

}
