import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../user/login.component';
import { RegisterComponent } from '../register/register.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductDetailsComponent } from '../product/product-details.component';
import { UserProfileComponent } from '../user/user-profile.component';
import { EditProfileComponent } from '../user/edit-profile.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'user/profile', component: UserProfileComponent, canActivate:[AuthGuard]},
  {path: 'user/edit/profile', component: EditProfileComponent, canActivate:[AuthGuard] },
  {path: '**', component: PageNotFoundComponent }


]

@NgModule({

  imports: [
     RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],

})
export class RoutingModule { }
