import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpConstants } from '../../../core/constants/httpConstants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });

    return next.handle(request).pipe(catchError(this.handlerError));
  }

  handlerError(error: HttpErrorResponse) {
    const status = error.status;

    if (status === HttpConstants.ACCEPTED) {
    }
    if (status === HttpConstants.UNAUTHORIZED) {
    }
    if (status === HttpConstants.CONFLICT) {
    }
    if (status === HttpConstants.INTERNAL_SERVER_ERROR || status === HttpConstants.SERVICE_UNAVAILABLE) {
    }
    console.log(error);
    return throwError(error);
  }
}
