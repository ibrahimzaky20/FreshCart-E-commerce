import { Component, inject, signal } from '@angular/core';
import { Products } from '../../../core/interfaces/products';
import { ProductsSharedComponent } from "../../../shared/components/products-shared/products-shared.component";
import { initFlowbite } from 'flowbite';
import { ProductService } from '../../../core/services/product/product.service';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite';

@Component({
  selector: 'app-all-products',
  imports: [ProductsSharedComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

 constructor(private flowbiteService: FlowbiteService) {}
 private productService:ProductService=inject(ProductService)
  allProducts=signal<Products[]>([])
    ngOnInit(): void {
      this.flowbiteService.loadFlowbite((flowbite) => {
          initFlowbite();
        });
        this.productService.getAllProducts().subscribe({
          next:(res)=>{this.allProducts.set(res.data)
          },
          error:(err)=>{}
        })
  
    }
}
