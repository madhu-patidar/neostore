import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Product } from './product';
import { productUrl, colorUrl, categoryUrl } from '../apiUrls'

@Injectable()
export class ProductFilterService {

  constructor(private http: Http) { }

  getCostAscendingOrderProducts(): Observable<Product>{
    return this.http.get(productUrl + '?filter={"order": "product_cost  ASC","include":"images", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

  getProductsByRating(): Observable<Product>{
    debugger
    return this.http.get(productUrl + '?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {                                
      return <Product>response.json()
    }).catch(this.handleError)
  }

  getCostDescendingOrderProducts(): Observable<Product>{
    return this.http.get(productUrl + '?filter={"order": "product_cost  DESC","include":"images", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

  getCategoryProducts(categoryId:string): Observable<any>{
    return this.http.get(categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getCostAscendingOrderProductsWithCategory(categoryId:string): Observable<any>{
    return this.http.get(categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_cost  ASC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getCostDescendingOrderProductsWithCategory(categoryId:string): Observable<any>{
    return this.http.get(categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_cost  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getRatingDescendingOrderProductsWithCategory(categoryId:string): Observable<any>{
    return this.http.get(categoryUrl+'/'+categoryId+'/products'+'?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {       console.log(response)       
      return <any>response.json()
    }).catch(this.handleError)
  }

  getProductCategories(categoryId): Observable<any>{
    return this.http.get(productUrl + '?filter={"where":{"categoryId":"'+categoryId+'"},"include":"images"}' ).map( (response:Response) => {
      return <any>response.json()
    }).catch(this.handleError)
  }

  getProductsByColor(colorName): Observable<any> {
    return this.http.get(productUrl + '?filter={"where":{"product_color.color_name":{"like":"'+ colorName +'","options":"i"}}, "include":"images"}' ).map( (response:Response) => {
    return <any>response.json()
    }).catch(this.handleError)
  }


  handleError(error: Response) { 
    return Observable.throw(error.json());
  }

}
