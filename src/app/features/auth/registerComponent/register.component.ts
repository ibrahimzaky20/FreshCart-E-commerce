import { Component } from '@angular/core';
import{ReactiveFormsModule,FormControl, FormGroup,Validators, AbstractControl}from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },this.confirmPassword)
  onSubmit(){
    if(this.registerForm.valid){console.log(this.registerForm.value);}}

    confirmPassword(g:AbstractControl){
      if(g.get('password')?.value===g.get('rePassword')?.value){
        return null
      }
      else{
        return {passwordMismatch:true}
      }
    }


}
