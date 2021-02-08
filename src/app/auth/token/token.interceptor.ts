import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private route: Router,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET') {

    } else if (request.method === 'POST') {
      request = request.clone({

      });
    } else if (request.method === 'PUT') {

    }

    // add authorization header with jwt token if available
      const token = localStorage.getItem('x-token');
      if (token) {
        request = request.clone({
          setHeaders: {
            'x-token': token,
            'current-time': moment().format('YYYY-MM-DD HH:mm:ss'),
            'utc-time': moment().utc().format('YYYY-MM-DD HH:mm:s')
          }
        });
        return next.handle(request);
      } else {
        // Only for login time
        if (request.url.includes('login') || request.url.includes('otp_callback')) {
          request = request.clone({
            setHeaders: {
              'current-time': moment().format('YYYY-MM-DD HH:mm:ss'),
              'utc-time': moment().utc().format('YYYY-MM-DD HH:mm:s')
            }
          });
          return next.handle(request);
        } else {
          if (this.activeRoute.snapshot.queryParams['key']) {

          } else {
            this.route.navigateByUrl('/login');
          }
        }
        // window.location.replace("/login");
      }
  }

}
