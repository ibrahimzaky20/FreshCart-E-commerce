import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  constructor(private flowbiteService: FlowbiteService) {}
  private router: Router = inject(Router);
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });
  }
  shop(){
    this.router.navigate(['/products']);
  }

}
