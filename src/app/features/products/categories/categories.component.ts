import { Router, RouterLink } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Category } from '../../../core/interfaces/products';


@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  private router: Router=inject(Router);
  private category:CategoriesService=inject(CategoriesService);
  allCategories=signal<Category[]>([])
  ngOnInit(): void {
    this.category.getAllCategories().subscribe({
      next:(res)=>{
        this.allCategories.set(res.data)
      }
      ,error:(err)=>{console.log(err)}
    })

  }

}
