import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { JavaClass } from 'src/app/models/JavaClass';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private jsontopojoEndpoint = 'http://jsontopojoapi.mypi.co/jsontopojo/';

  constructor(private http: HttpClient) { }

  jsonToPojo(jsonToPojoReq) : Observable<JavaClass[]> {
     return this.http.post<JavaClass[]>(this.jsontopojoEndpoint + 'convert',jsonToPojoReq);
  }

  downloadPojo(jsonToPojoReq) : Observable<Blob> {
     return this.http.post(this.jsontopojoEndpoint + 'download', jsonToPojoReq, {responseType: "blob"});
  }
}
