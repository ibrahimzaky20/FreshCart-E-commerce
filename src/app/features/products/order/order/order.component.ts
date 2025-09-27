import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../../../core/services/order/order.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  private orderService:OrderService=inject(OrderService);
  private activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  cartId=signal<string>('');
  addressForm:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((p)=>{
      this.cartId.set(p.get('cartId')!)
    })

  }
  checkOut(){
    this.orderService.checkOutSession(this.cartId(),this.addressForm.value).subscribe({
      next:(res)=>{console.log(res)
        window.location.href=res.session.url
      },
      error:(err)=>{}
    })

  }

}
