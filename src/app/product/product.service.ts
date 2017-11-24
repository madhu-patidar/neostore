
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Product } from './product';
import { productUrl, colorUrl } from '../apiUrls'


@Injectable()
export class ProductService {

  constructor(private http: Http) { }


	getPopularProducts(): Observable<Product>{
    return this.http.get(productUrl + '?filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

  getProducts(skip): Observable<Product>{
    return this.http.get(productUrl + '?filter={"order": "product_avg_rating  DESC","include":"images", "limit":"6", "skip":"'+ skip +'"}').map((response: Response) => {                                
      return <Product>response.json()
    }).catch(this.handleError)
  }

  getProduct(id:string): Observable<Product>{
    return this.http.get(productUrl + "/" + id + '?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {                                
      return <Product>response.json()
    }).catch(this.handleError)
  }

  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
