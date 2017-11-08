import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductImage } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [ProductService]
})
export class HomeComponent implements OnInit {
  
  products:Product

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getPopularProducts()
    console.log(this.products)
  }

   getPopularProducts() {
    this.productService.getPopularProducts().subscribe(
      (response: Product) => {
        this.products = response
        console.log(this.products)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

}
