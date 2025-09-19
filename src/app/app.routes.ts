import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/registerComponent/register.component';
import { HomeComponent } from './features/products/home/home.component';
import { CategoriesComponent } from './features/products/categories/categories.component';
import { BrandsComponent } from './features/products/brands/brands.component';
import { CartComponent } from './features/products/cart/cart.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { NotfoundComponent } from './features/products/notfound/notfound.component';
import { authGuard } from './core/gaurd/auth.guard';
import { ProductsSharedComponent } from './shared/components/products-shared/products-shared.component';
import { AllProductsComponent } from './features/products/all-products/all-products.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"register",component:RegisterComponent,title:"Register"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"home",component:HomeComponent,title:"Home",canActivate:[authGuard]},
    {path:"categories",component:CategoriesComponent,title:"Categories",canActivate:[authGuard]},
    {path:"brands",component:BrandsComponent,title:"Brands",canActivate:[authGuard]},
    {path:"cart",component:CartComponent,title:"Cart",canActivate:[authGuard]},
    {path:'details/:pId',component:ProductDetailsComponent,title:"ProductDetails",canActivate:[authGuard]},
    {path:"products",component:AllProductsComponent,title:"Products",canActivate:[authGuard]},
    {path:"**",component:NotfoundComponent,title:"not found"}
    

];
