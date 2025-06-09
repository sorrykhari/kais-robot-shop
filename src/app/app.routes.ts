import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: "Home - Kai's Robot Shop"},
    {path: 'catalog/:filter', component: CatalogComponent, title: "Catalog - Kai's Robot Shop"},
    {path: 'cart', component: CartComponent, title: "Cart - Kai's Robot Shop"},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
