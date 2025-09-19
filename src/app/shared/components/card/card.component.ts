import { Component, inject, Input } from '@angular/core';
import { Products } from '../../../core/interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() oneProduct:Products={} as Products;
private cartService:CartService=inject(CartService);
private toastr:ToastrService=inject(ToastrService);

addCart(pid:string ,pName:string){
  this.cartService.addTCart(pid).subscribe({
    next:(res)=>{
      this.toastr.success(res.message,`${pName}`)
    },
    error:(err)=>{console.log(err)}
  })

}
}
