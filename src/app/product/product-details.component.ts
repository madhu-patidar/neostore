import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product} from './product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product.component.css'],
     providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  imgsrc:string
  id:string
  images:any
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']    
    });
    this.getProduct(this.id)
  }


    getProduct(productId:string) {
    this.productService.getProduct(productId).subscribe(
      (response: Product) => {
        this.product = response 
        this.imgsrc = this.product.images[0].ImgURL
        this.images = this.product.images
        console.log(this.product)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  imageActive(imgUrl:string)
  {
   this.imgsrc = imgUrl 
  }

}
