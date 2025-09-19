import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { IPcart, Product2 } from '../../../core/interfaces/cart';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService:CartService=inject(CartService);
  private toastr:ToastrService=inject(ToastrService)
  cartItems=signal<Product2[]>([])
  totalPrice=signal<IPcart[]>([])
  ngOnInit():void {
    this.getAllCart()
    

  }
  remove(pId:string){
    this.cartService.removeSpecProduct(pId).subscribe({
      next:(res)=>{
        this.toastr.success('item removed successfully')
        this.getAllCart()
      }
    })
  }
  getAllCart(){
    this.cartService.getAllCart().subscribe({
      next:(res)=>{
        this.cartItems.set(res.data.products)
        this.totalPrice.set(res.data.totalCartPrice)
      }
    })
  }
  count(pId:string,pCount:number){
    if(pCount<1){
      this.remove(pId)
    }
    else{
      this.cartService.updateCart(pId,pCount).subscribe({
      next:(res)=>{
         this.toastr.success('item updated successfully')
        this.getAllCart()
      }
    })
    }
    


  }
  clearCart(){
    this.cartService.clearAllCart().subscribe({
      next:(res)=>{
          this.toastr.success('Cart Cleared successfully')
          this.getAllCart()
      }
    })
  }


}
