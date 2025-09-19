import { HttpInterceptorFn } from '@angular/common/http';


export const headerInterceptor: HttpInterceptorFn = (req, next) => {
    if(localStorage.getItem('userToken')){
         let header:any={token:localStorage.getItem('userToken')!};
  req=req.clone({
    setHeaders:header
  })

    }
  
  return next(req);
};
