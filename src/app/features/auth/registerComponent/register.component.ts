import { Component, inject, signal } from '@angular/core';
import{ReactiveFormsModule,FormControl, FormGroup,Validators, AbstractControl}from '@angular/forms'
import { AuthService } from '../../../core/services/authService/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private auth: AuthService=inject(AuthService);
  private router: Router=inject(Router);
  errorMessage =signal<string>('');
  isLoading=signal<boolean>(false);

  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },this.confirmPassword)
  onSubmit(){
    if(this.registerForm.valid){
      this.isLoading.set(true);
      this.auth.registerApi(this.registerForm.value).subscribe({
        next:(res)=>{if(res.message=='success'){
          this.router.navigate(['/login'])
          this.isLoading.set(false);
        }},
        error:(err)=>{
          this.errorMessage.set(err.error.message)
          this.isLoading.set(false);
        },
        complete:()=>{}
      })
    }
  }

    confirmPassword(g:AbstractControl){
      if(g.get('password')?.value===g.get('rePassword')?.value){
        return null
      }
      else{
        return {passwordMismatch:true}
      }
    }


}
