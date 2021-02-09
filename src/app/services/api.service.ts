/*
     API servies .
                   -- by Rajkumar K -- 01/10/2020 --
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  constructor(private http: HttpClient) { }

  // Login func used to call API
  login(body): Observable<any> {
    const requestUrl = this.baseUrl + 'login/';
    return this.http.post(requestUrl, body).pipe(map(this.extractData));
  }

  getResults(body): Observable<any> {
    const params = new HttpParams()
      .set('start', body.start)
      .set('end', body.end)
      .set('page', body.page)
      .set('sort',body.sort)
      .set('limit', body.limit);
    const requestUrl = this.baseUrl + '/result/';
    return this.http.get(requestUrl, { params }).pipe(map(this.extractData));
  }

  createResults(body): Observable<any> {
    const requestUrl = this.baseUrl + 'result/';
    return this.http.post(requestUrl, body).pipe(map(this.extractData));
  }

  updateResults(body): Observable<any> {
    const requestUrl = this.baseUrl + 'result/';
    return this.http.put(requestUrl, body).pipe(map(this.extractData));
  }


  // // Forget password
  // forgetPassword(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/forget/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // // New password update
  // newPasswordUpdate(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/password_change/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // getBookings(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/bookings/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }
  // // get shipments
  // getShipment(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // // get Routes
  // getShipmentRoutes(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipment_router/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }
  // getShipmentBasicNRoute(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }

  // // Get shipments related documents
  // getShipmentDocuments(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments_documents/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }

  // getShipmentFullTimeline(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipment_full_timeline/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }

  // search(q): Observable<any> {
  //   const params = new HttpParams()
  //     .set('q', q)
  //   const requestUrl = this.baseUrl + '/search/';
  //   return this.http.get(requestUrl, { params }).pipe(map(this.extractData));
  // }
  // // Get shipments Details specify one
  // getShipmentDetails(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments_details/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }


  // getBookingStatusCount(): Observable<any> {
  //   const requestUrl = this.baseUrl + '/booking_status_count/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }



  // // Get left side static count
  // getShipmentStaticCount(): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments_static_count/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }


  // // Get shipments Details specify one
  // commonUpdate(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/common/' + body.table_name + '/' + body.id + '/';
  //   delete body['table_name'];
  //   delete body['id'];
  //   return this.http.put(requestUrl, body).pipe(map(this.extractData));
  // }

  // // Get User management user list
  // getUserManagementList(): Observable<any> {
  //   const requestUrl = this.baseUrl + '/users/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }


  // // Get User management user list
  // createUserManagementList(body): Observable<any> {
  //   const requestUrl = this.baseUrl + '/users/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }


  // getDocumentTypes(): Observable<any> {
  //   const requestUrl = this.baseUrl + '/shipments_documents_type/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }

  // fileUpload(body): Observable<any> {
  //   const requestUrl = 'https://api.myairliftusa.com/api/v1' + '/uploads/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // fileDeleted(fileName): Observable<any> {
  //   const requestUrl = 'https://api.myairliftusa.com/api/v1' + '/uploads/' + fileName;
  //   return this.http.delete(requestUrl).pipe(map(this.extractData));
  // }
  // multiFileDeleted(body): Observable<any> {
  //   const requestUrl = 'https://api.myairliftusa.com/api/v1' + '/removeMultiFile/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // //Common service
  // craeteItem(body): Observable<any> {
  //   const requestUrl = 'https://api.myairliftusa.com/api/v1' + '/create/';
  //   return this.http.post(requestUrl, body).pipe(map(this.extractData));
  // }

  // // Get Profile data
  // getProfile(id): Observable<any> {
  //   const requestUrl = this.baseUrl + '/profile/' + id + '/';
  //   return this.http.get(requestUrl).pipe(map(this.extractData));
  // }



}
