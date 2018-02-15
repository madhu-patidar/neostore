import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageZoomModule } from 'angular2-image-zoom';
import { StarRatingModule } from 'angular-star-rating';

import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { RateModalComponent } from '../rate-modal/rate-modal.component';
import { SideBarComponent } from '../sidebar/sidebar.component';


const appRoutes: Routes = [

  {path: 'products/:id', component: ProductDetailsComponent },
  {path: 'product/list', component: ProductListComponent },
]

@NgModule({
   declarations: [
    ProductDetailsComponent,
    RateModalComponent,
    SideBarComponent,
    ProductListComponent
  ],

  imports: [
    BrowserModule,
    InfiniteScrollModule,
    ImageZoomModule,
    StarRatingModule,
     RouterModule.forRoot(
      appRoutes
    )
  ],

  exports: [
    RouterModule,
    ProductDetailsComponent,
    RateModalComponent,
    SideBarComponent,
    ProductListComponent
  ]
})

export class ProductRoutingModule { }
