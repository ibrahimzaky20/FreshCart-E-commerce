import { Component, inject, signal } from '@angular/core';
import { BrandsService } from '../../../core/services/brands/brands.service';
import { Category } from '../../../core/interfaces/products';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  private brandsService:BrandsService=inject(BrandsService);
  allBrands=signal<Category[]>([])
  ngOnInit():void{
    this.brandsService.getAllBrands().subscribe({
      next:(res)=>{
        this.allBrands.set(res.data)
      }
    })
  }

}
