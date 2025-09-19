import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { jwtDecode } from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';
import { User } from '../../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: any){
    if(isPlatformBrowser(this.platformId)){
      this.setUserData();
    }
  }
  private httpClient :HttpClient = inject(HttpClient);
  userData=new BehaviorSubject<User|null>(null);
  
  registerApi(bodyData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}auth/signup`, bodyData);
  }
  loginApi(bodyData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}auth/signin`, bodyData);
  }
  setUserData(){
    
      if(localStorage.getItem('userToken')!==null){
        let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
        let decodedToken=jwtDecode(encodedToken) as User;
        this.userData.next(decodedToken);

      }
    
  }
  }
  

