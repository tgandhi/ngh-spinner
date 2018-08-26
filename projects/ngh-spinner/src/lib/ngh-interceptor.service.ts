import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { NghSpinnerService } from './ngh-spinner.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NghInterceptorService implements HttpInterceptor {
  constructor(private nghSpinnerService: NghSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });
    return next.handle(req).pipe(
      map(event => {
        this.nghSpinnerService.show();
        return event;
      }),
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => {
        this.nghSpinnerService.hide();
      })


    )

  }
}
