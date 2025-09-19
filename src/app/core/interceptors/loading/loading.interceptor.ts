import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
   let ngxSpinnerService:NgxSpinnerService=Inject(NgxSpinnerService);
   ngxSpinnerService.show()
  return next(req).pipe(finalize(()=>{
    ngxSpinnerService.hide()
  }));
};
