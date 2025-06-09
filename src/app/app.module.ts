// This is no longer a thing in the latest Angular versions, so it's just for practice purposes.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, NgClass, NgFor, NgIf, CurrencyPipe, CartComponent, AppRoutingModule
  ],
  providers: [],
  bootstrap: [CommonModule]
})
export class AppModule {
  
 }