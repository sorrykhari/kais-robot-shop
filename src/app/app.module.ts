// This is no longer a thing in the latest Angular versions, so it's just for practice purposes.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf, NgFor } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule, NgIf, NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }