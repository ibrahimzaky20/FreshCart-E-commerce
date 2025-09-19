import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../core/services/product/product.service';
import { Products } from '../../../core/interfaces/products';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../core/services/cart/cart.service';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private activatedRoute: ActivatedRoute=inject(ActivatedRoute);
  private products:ProductService=inject(ProductService);
  private cartService:CartService=inject(CartService);
  private toastr:ToastrService=inject(ToastrService);
  product=signal<Products>({}as Products)
  pId:string|null=""

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((p)=>{
      this.pId=p.get('pId')


       this.products.getSpecProducts(this.pId).subscribe({
      next:(res)=>{this.product.set(res.data)},
    })

    })
   
    
  }
  
  
  addCart(pid:string ,pName:string){
    this.cartService.addTCart(pid).subscribe({
      next:(res)=>{
        this.toastr.success(res.message,`${pName}`)
      },
      error:(err)=>{console.log(err)}
    })
  
  }

}
