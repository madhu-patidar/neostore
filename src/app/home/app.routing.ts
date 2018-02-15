import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StarRatingModule } from 'angular-star-rating';

import { CustomFormsModule } from 'ng2-validation'
import { AuthGuard } from '../guards/auth.guard';

import { UserService } from '../user/user.service'

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../user/login.component';
import { RegisterComponent } from '../register/register.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductDetailsComponent } from '../product/product-details.component';
import { UserProfileComponent } from '../user/user-profile.component';
import { EditProfileComponent } from '../user/edit-profile.component';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';
import { AddressComponent } from '../user/address.component';
import { AccountSidebarComponent } from '../user/account-sidebar.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'user/profile', component: UserProfileComponent, canActivate:[AuthGuard]},
  {path: 'user/edit/profile', component: EditProfileComponent, canActivate:[AuthGuard] },
  {path: 'user/addresses', component: AddressComponent, canActivate:[AuthGuard] },
  
  {path: '**', component: PageNotFoundComponent }
]

@NgModule({
    declarations: [
    HomeComponent,
    UserProfileComponent,
    EditProfileComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    EditProfileComponent,
    FooterComponent,
    SliderComponent,
    AddressComponent,
    AccountSidebarComponent
  ],

  imports: [
    StarRatingModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    UserProfileComponent,
    EditProfileComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    EditProfileComponent,
    RouterModule,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    AddressComponent,
    AccountSidebarComponent
  ],
    providers: [
      UserService 
  ],

})

export class RoutingModule { }
