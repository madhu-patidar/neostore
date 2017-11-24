import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { ProductFilterService } from './product-filter.service';
import { ColorService } from '../color/color.service';
import { Product } from './product';
import { ProductImage } from './product';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any
  images:any
  categories:Category
  categoryId:string
  colors:any
  productArray:any[] = []
  categoryTitle:string
  allCategories:string = "All categories"
  skip: number = 0
  constructor(
    private colorService:ColorService,
    private productService:ProductService, 
    private categoryService:CategoryService,
    private productFilterService:ProductFilterService,
    ) { }

  ngOnInit() {
   this.getProducts();
   this.getCategories();
   this.getColors();
  }


  lazyLoadingProducts(){
    this.skip = this.skip + 6
    if(this.skip <= 0 ){
      false
    } else {
      this.getProducts()
    }
  }


  getSortByLowPrice(){
  	if(this.categoryId==undefined) {  
       this.getCostAscendingOrderProducts()
		} else {
	    this.getCostAscendingOrderProductsWithCategory(this.categoryId)
		}
	}

  getSortByHighPrice(){
  	if(this.categoryId==undefined) {  
       this.getCostDescendingOrderProducts()
		} else {
	    this.getCostDescendingOrderProductsWithCategory(this.categoryId)
		}
  }
 
  getSortByRating(){
  	if(this.categoryId==undefined) {  
       this.getProductsByRating()
		} else {
	    this.getRatingDescendingOrderProductsWithCategory(this.categoryId)
		}
  }

  getProducts() {
    this.productService.getProducts(this.skip).subscribe(
      (response: any) => {
        this.products = response 
        this.images = response.images
        for(let product of this.products){
          this.productArray.push(product)
        }
        this.categoryTitle = this.allCategories
        console.log("this.products")
        console.log(this.productArray)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getProductsByRating() {
    this.productFilterService.getProductsByRating().subscribe(
      (response: any) => {
        this.products = response 
        debugger
        this.images = response.images
        this.productArray = response
        this.categoryTitle = this.allCategories
        console.log("this.products")
        console.log(this.productArray)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response: Category) => {
        this.categories = response
        console.log(this.categories)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getColors() {
    this.colorService.getColors().subscribe(
      (response: Category) => {
        this.colors = response
        console.log(this.colors)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getCostAscendingOrderProducts(){
   this.productFilterService.getCostAscendingOrderProducts().subscribe(
      (response: any) => {
        this.products = response 
        this.productArray = response
        this.images = response.images
        console.log(this.products)

        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getCostAscendingOrderProductsWithCategory(categoryId:string){
   this.productFilterService.getCostAscendingOrderProductsWithCategory(categoryId).subscribe(
      (response: any) => {
        this.products = response
        this.productArray = response
        this.images = response.images
        console.log(this.products)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }


  getCostDescendingOrderProducts(){
   this.productFilterService.getCostDescendingOrderProducts().subscribe(
      (response: any) => {
        this.products = response 
        this.productArray = response        
        this.images = response.images
        console.log(this.products)

        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getRatingDescendingOrderProductsWithCategory(categoryId:string){
    this.productFilterService.getRatingDescendingOrderProductsWithCategory(categoryId).subscribe(
      (response: any) => {
        this.products = response
        this.productArray = response 
        this.images = response.images
        console.log(this.products)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }


  getCostDescendingOrderProductsWithCategory(categoryId:string){
    this.productFilterService.getCostDescendingOrderProductsWithCategory(categoryId).subscribe(
      (response: any) => {
        this.products = response 
        this.productArray = response
        this.images = response.images
        console.log(this.products)

        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getCategoryProducts(category:any) {
   console.log(category)
    this.productFilterService.getCategoryProducts(category.id).subscribe(
      (response: any) => {
        this.products = response 
        this.productArray = response
        this.images = response.images
        this.categoryTitle = category.category_name
        this.categoryId = category.id
        console.log(this.products)
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

  getProductByCategory(event){
    this.productArray = event.products
    this.categoryTitle = event.title
    this.categoryId = event.id
  }

  getProductsByColor(event){
    this.categoryTitle = this.allCategories
    this.categoryId = undefined
    this.productArray = event
  }

}
