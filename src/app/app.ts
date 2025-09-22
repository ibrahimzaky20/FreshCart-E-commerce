import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Update the path below to the actual location of FlowbiteService, for example:
import { FlowbiteService } from '../app/core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent ,NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // Add FlowbiteService to providers
})
export class App {
 private ngxSpinnerService:NgxSpinnerService=Inject(NgxSpinnerService);
   constructor(private flowbiteService: FlowbiteService) {}
   ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
      this.ngxSpinnerService.show()
      setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.ngxSpinnerService.hide();
    }, 5000);
    });
    
}
}
