import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  
  constructor(private categoryService:CategoryService) { }
  categories:Category
  ngOnInit() {
    this.getCategories()
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

}
