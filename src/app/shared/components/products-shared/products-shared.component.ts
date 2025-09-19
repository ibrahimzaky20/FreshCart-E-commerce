import { Component, inject, Input } from '@angular/core';
import { Products } from '../../../core/interfaces/products';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-shared',
  imports: [CardComponent],
  templateUrl: './products-shared.component.html',
  styleUrl: './products-shared.component.scss'
})
export class ProductsSharedComponent {
  
  @Input() products:Products[]=[]
 

}
