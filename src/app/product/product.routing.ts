import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth.guard';


const appRoutes: Routes = [

  {path: 'products/:id', component: ProductDetailsComponent },
  {path: 'product/list', component: ProductListComponent },
]

@NgModule({

  imports: [
     RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
