import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarRatingModule } from 'angular-star-rating';

import { ProductRoutingModule } from './product/product.routing';
import { RoutingModule } from './home/app.routing';
import { AuthModule } from './auth.module';

import { CategoryService } from './category/category.service';
import { ProductFilterService } from './product/product-filter.service';
import { RatingService } from './rating/rating.service'
import { ProductService } from './product/product.service';
import { AuthServiceLocal } from './auth.service';
import { ColorService } from './color/color.service'
import { UserService } from './user/user.service'
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    PageNotFoundComponent,
  ],

  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StarRatingModule.forRoot(),
    ProductRoutingModule,
    RoutingModule,
  ],

  providers: [
    ProductService,
    CategoryService, 
    AuthServiceLocal, AuthGuard, 
    ColorService, ProductFilterService, 
    RatingService, 
    UserService 
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
