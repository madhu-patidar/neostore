import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { ColorService } from '../color/color.service';
import { ProductFilterService } from '../product/product-filter.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SideBarComponent implements OnInit{
  @Output() categoryFilter: EventEmitter<any> = new EventEmitter<any>()
  @Output() colorFilter: EventEmitter<any> = new EventEmitter<any>()

  products:any
  images:any
  categories:Category
  categoryId:string
  colors:any
  productArray:any[] = []
  categoryTitle:string
  skip: number = 0

  constructor(
    private productService:ProductService, 
    private categoryService:CategoryService,
    private colorService:ColorService,
    private productFilterService:ProductFilterService
    ) { }

  ngOnInit() {
  	this.getCategories()
  	this.getColors()
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

  getProductByCategory(id, category_name){
    this.productFilterService.getProductCategories(id).subscribe(
      (response) => {
         let results = {
           id: id,
           title : category_name,
           products: response
        }
        this.categoryFilter.emit(results)
      },
      error => error
    )
  }

  getProductcByColor(colorName){
    this.productFilterService.getProductsByColor(colorName).subscribe(
      response => this.colorFilter.emit(response),
      error => error
    )
  }

}
