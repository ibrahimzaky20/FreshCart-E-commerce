import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/registerComponent/register.component';
import { HomeComponent } from './features/products/home/home.component';
import { CategoriesComponent } from './features/products/categories/categories.component';
import { BrandsComponent } from './features/products/brands/brands.component';
import { CartComponent } from './features/products/cart/cart.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductsComponent } from './features/products/products/products.component';
import { NotfoundComponent } from './features/products/notfound/notfound.component';

export const routes: Routes = [
    {path:"",redirectTo:"register",pathMatch:"full"},
    {path:"register",component:RegisterComponent,title:"Register"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"home",component:HomeComponent,title:"Home"},
    {path:"categories",component:CategoriesComponent,title:"Categories"},
    {path:"brands",component:BrandsComponent,title:"Brands"},
    {path:"cart",component:CartComponent,title:"Cart"},
    {path:"details",component:ProductDetailsComponent,title:"ProductDetails"},
    {path:"products",component:ProductsComponent,title:"Products"},
    {path:"**",component:NotfoundComponent,title:"not found"}
    

];
