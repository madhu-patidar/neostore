import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarRatingModule } from 'angular-star-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ImageZoomModule} from 'angular2-image-zoom';
import { CustomFormsModule } from 'ng2-validation'

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
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './user/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { ProductListComponent } from './product/product-list.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { RateModalComponent } from './rate-modal/rate-modal.component';
import { UserProfileComponent } from './user/user-profile.component';
import { EditProfileComponent } from './user/edit-profile.component';

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
    ProductListComponent,
    SideBarComponent,
    RateModalComponent,
    UserProfileComponent,
    EditProfileComponent
  ],
  imports: [
    ImageZoomModule,
    AuthModule,
    CustomFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    StarRatingModule.forRoot(),
    ProductRoutingModule,
    RoutingModule,
    InfiniteScrollModule
  ],
  providers: [ProductService,CategoryService, AuthServiceLocal, AuthGuard, ColorService, ProductFilterService, RatingService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
