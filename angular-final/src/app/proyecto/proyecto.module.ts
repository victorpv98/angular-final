import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//material
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    HomeComponent,
    BooksComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    ProfileComponent,
    HomeComponent,
    UsersComponent,
    BooksComponent
  ]
})
export class ProyectoModule { }
