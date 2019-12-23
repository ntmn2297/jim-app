import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry, timeout} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  token: string;

  constructor(private spinner: NgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';

    // this.token = this.auth.getToken() == null ? hardcodedToken : this.auth.getToken();

    req = req.clone({
      setHeaders: {
        Authorization: `Basic ${hardcodedToken}`
      }
    });
    this.spinner.show();
    return next.handle(req).pipe(
      timeout(3000),
      catchError((error: HttpErrorResponse) => {
        // TODO: Add error handling logic here
        alert(`HTTP Error: ${req.url}`);
        return throwError(error);
      }),
      // PROFILING
      finalize(() => {
        const profilingMsg = `${req.method} "${req.urlWithParams}"`;
        console.log(profilingMsg);
        this.spinner.hide();
      }));
  }
}
