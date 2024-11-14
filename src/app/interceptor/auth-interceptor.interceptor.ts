import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Pase por el interceptor");

  let token = localStorage.getItem("token")
console.log("token ", token)
  if (req.url.includes("localhost:8000")){
    if (token) {
      const petitionClone = req.clone({
        setHeaders : {
          Authorization : `${token}`
        }
      });
        return next(petitionClone).pipe(catchError(handleError));
   }
  }
  

 return next(req).pipe(catchError(handleError));

};

const handleError = (error : HttpErrorResponse )=>{
  console.log("Genero un error");
  console.log(error);

  return throwError(()=>"error")
}
