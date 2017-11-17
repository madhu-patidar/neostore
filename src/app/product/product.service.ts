
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

   productUrl:string="http://180.149.245.182:3008/api/products"
   colorUrl:string="http://180.149.245.182:3008/api/colors"

	getPopularProducts(): Observable<Product>{
    return this.http.get(this.productUrl + '?filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

  getProducts(skip): Observable<Product>{
    return this.http.get(this.productUrl + '?filter={"order": "product_avg_rating  DESC","include":"images", "limit":"6", "skip":"'+ skip +'"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }


   getCostAscendingOrderProducts(): Observable<Product>{
    return this.http.get(this.productUrl + '?filter={"order": "product_cost  ASC","include":"images", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

   getCostDescendingOrderProducts(): Observable<Product>{
    return this.http.get(this.productUrl + '?filter={"order": "product_cost  DESC","include":"images", "skip":"0"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

    getProduct(id:string): Observable<Product>{
    return this.http.get(this.productUrl + "/" + id + '?filter={"order": "product_avg_rating  DESC","include":"images"}').map((response: Response) => {                                

      return <Product>response.json()
    }).catch(this.handleError)
  }

  getColors(): Observable<any>{
    return this.http.get(this.colorUrl).map((response: Response) => {                                

      return <any>response.json()
    }).catch(this.handleError)
  }


    handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
