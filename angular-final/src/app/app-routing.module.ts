import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './proyecto/login/login.component';
import { CanactivateGuard } from './canactivate.guard';
import { HomeComponent } from './proyecto/home/home.component';
import { ProfileComponent } from './proyecto/profile/profile.component';
import { UsersComponent } from './proyecto/users/users.component';
import { BooksComponent } from './proyecto/books/books.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent,canActivate:[CanactivateGuard]},
  {path:'users',component:UsersComponent,canActivate:[CanactivateGuard]},
  {path:'books',component:BooksComponent,canActivate:[CanactivateGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
