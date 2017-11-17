import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from '../product/product';
import { ProductImage } from '../product/product';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product
  images:any
  categories:Category
  categoryId:string
  colors:any
  productArray: any[] = []
  categoryTitle:string
  skip: number = 0
  constructor(private productService:ProductService, private categoryService:CategoryService,) { }

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
       this.getProducts()
		} else {
	    this.getRatingDescendingOrderProductsWithCategory(this.categoryId)
		}
  }

  getProducts() {
    this.productService.getProducts(this.skip).subscribe(
      (response: Product) => {
        this.products = response 
        this.images = response.images
        for(let product of this.products){
          this.productArray.push(product)
        }
        this.categoryTitle = "All Categories"
        console.log(this.products)
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
    this.productService.getColors().subscribe(
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
   this.productService.getCostAscendingOrderProducts().subscribe(
      (response: Product) => {
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
   this.categoryService.getCostAscendingOrderProducts(categoryId).subscribe(
      (response: Product) => {
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
   this.productService.getCostDescendingOrderProducts().subscribe(
      (response: Product) => {
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
    this.categoryService.getRatingDescendingOrderProductsWithCategory(categoryId).subscribe(
      (response: Product) => {
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
    this.categoryService.getCostDescendingOrderProducts(categoryId).subscribe(
      (response: Product) => {
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
    this.categoryService.getCategoryProducts(category.id).subscribe(
      (response: Product) => {
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

}
