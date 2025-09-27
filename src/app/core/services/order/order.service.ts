import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private httpClient : HttpClient=inject(HttpClient)
  checkOutSession(cartId: string, addressValue: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}orders/checkout-session/${cartId}?url=${environment.commUrl}`,
      {
         'shippingAddress': addressValue,
        
      }
    )
  }

  
}
