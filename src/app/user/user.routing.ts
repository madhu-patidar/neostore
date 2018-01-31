// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../guards/auth.guard';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { CustomFormsModule } from 'ng2-validation'

// import { AuthServiceLocal } from '../auth.service';
// import { UserService } from './user.service'

// import { HomeComponent } from '../home/home.component';
// import { LoginComponent } from './login.component';
// import { RegisterComponent } from '../register/register.component';
// import { ProductDetailsComponent } from '../product/product-details.component';
// import { UserProfileComponent } from './user-profile.component';
// import { EditProfileComponent } from './edit-profile.component';
// import { FooterComponent } from '../footer/footer.component';



// const appRoutes: Routes = [
//   {path: 'login', component: LoginComponent },
//   {path: 'register', component: RegisterComponent },
//   {path: 'home', component: HomeComponent},
//   {path: '', redirectTo: '/home', pathMatch: 'full' },
//   {path: 'user/profile', component: UserProfileComponent, canActivate:[AuthGuard]},
//   {path: 'user/edit/profile', component: EditProfileComponent, canActivate:[AuthGuard] }
// ]

// @NgModule({
//     declarations: [
//     LoginComponent,
//     RegisterComponent,
//     UserProfileComponent,
//     EditProfileComponent
//   ],
//   imports: [
//      RouterModule.forRoot(
//       appRoutes
//     ),
//     ReactiveFormsModule,
//     FormsModule,
//     BrowserModule,
//     CustomFormsModule
//   ],
//   exports: [
//     RouterModule
//   ],
//   providers: [AuthServiceLocal, AuthGuard, UserService ],

// })
// export class UserRoutingModule { }
