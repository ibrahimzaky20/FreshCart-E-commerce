import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { AuthService } from '../../../core/services/authService/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from '../../../core/services/storageService/storage.service';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private auth: AuthService=inject(AuthService);
    private router: Router=inject(Router);
    private storageService: StorageService=inject(StorageService);
    constructor(@Inject(PLATFORM_ID) private platformId: any){}
    errorMessage =signal<string>('');
    isLoading=signal<boolean>(false);
  
    loginForm:FormGroup=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6}$/)])
    })
      onSubmit(){
    if(this.loginForm.valid){
      this.isLoading.set(true);
      this.auth.loginApi(this.loginForm.value).subscribe({
        next:(res)=>{if(res.message=='success'){
          this.storageService.setItem('userToken',res.token);
          this.auth.setUserData();
          this.isLoading.set(false);
          this.router.navigate(['/home'])
        }},
        error:(err)=>{
          this.errorMessage.set(err.error.message)
          this.isLoading.set(false);
        },
        complete:()=>{}
      })
    }
  }

}
