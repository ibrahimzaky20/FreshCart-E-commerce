import { Component, signal, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Update the path below to the actual location of FlowbiteService, for example:
import { FlowbiteService } from '../app/core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // Add FlowbiteService to providers
})
export class App {
 
   constructor(private flowbiteService: FlowbiteService) {}
   ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
}
}
