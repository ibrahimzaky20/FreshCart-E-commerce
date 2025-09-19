import { Component, inject, signal } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite/flowbite';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/authService/auth.service';
import { StorageService } from '../../core/services/storageService/storage.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private auth: AuthService = inject(AuthService);
  private storageService: StorageService = inject(StorageService);
  private router: Router = inject(Router);
  constructor(private flowbiteService: FlowbiteService) {}
  isLogin = signal<boolean>(false);
  

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    
    this.checkLogin();
  }
  checkLogin() {
    this.auth.userData.subscribe({
      next:(res)=>{
        if(this.auth.userData.getValue()==null){
          this.isLogin.set(false);
        }else{
          this.isLogin.set(true);
        }
      }
    })
  }
  logout() {
    this.storageService.removeItem('userToken');
    this.auth.userData.next(null);
    this.router.navigate(['/login']);
    this.isLogin.set(false);
   
  }
}
