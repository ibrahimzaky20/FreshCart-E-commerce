
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MyplatformService } from '../services/myplatform/myplatform.service';





export const authGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let myplatformService=inject(MyplatformService);
  if(myplatformService.checkPlatformBrowser()){
    if(localStorage.getItem('userToken')){
    return true;
  }
  
  return router.createUrlTree(['/login']);
  }
  return router.createUrlTree(['/login']);
  
  

  
};
