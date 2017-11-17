import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductImage } from '../product/product';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
     providers: []
})
export class SliderComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  
  categories:Category
  i:number = 0
  ngOnInit() {
    this.getPopularCategories()
  }

   getPopularCategories() {
    this.categoryService.getPopularCategories().subscribe(
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

}
