import { Category } from './../../../core/interfaces/products';
import { ProductService } from './../../../core/services/product/product.service';
import { Component, inject, signal } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { FlowbiteService } from '../../../core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';
import { AdvertismentComponent } from "../advertisment/advertisment.component";
import { Products } from '../../../core/interfaces/products';
import { ProductsSharedComponent } from "../../../shared/components/products-shared/products-shared.component";
import { Router } from '@angular/router';
import { CategorySliderComponent } from '../categories/category-slider/category-slider.component';
import { CategoriesService } from '../../../core/services/categories/categories.service';



@Component({
  selector: 'app-home',
  imports: [SliderComponent, AdvertismentComponent, ProductsSharedComponent,CategorySliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 constructor(private flowbiteService: FlowbiteService) {}
 private productService:ProductService=inject(ProductService)
 private router:Router=inject(Router)
 private Category:CategoriesService=inject(CategoriesService)
 
 someProducts=signal<Products[]>([])
 someCategory=signal<Category[]>([])
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });
      this.productService.getAllProducts().subscribe({
        next:(res)=>{
        this.someProducts.set(res.data.slice(28,40))
        },
        error:(err)=>{console.log(err)}
      })
      this.Category.getAllCategories().subscribe({
        next:(res)=>{
        this.someCategory.set(res.data.slice(0,10))
        },
        error:(err)=>{console.log(err)}
      })

      

  }
   showAll(){
    this.router.navigate(['/products'])
  }
}
