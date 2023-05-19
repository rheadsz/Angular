import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BookComponent } from './books/book/book.component';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    BooksModule,
    AppRoutingModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
