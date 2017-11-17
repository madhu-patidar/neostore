import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarRatingModule } from 'angular-star-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ProductRoutingModule } from './product/product.routing';
import { HomeRoutingModule } from './home/home.routing';

import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { ProductListComponent } from './product/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    ProductComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
     StarRatingModule.forRoot(),
     ProductRoutingModule,
     HomeRoutingModule,
     InfiniteScrollModule
  ],
  providers: [ProductService,CategoryService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
