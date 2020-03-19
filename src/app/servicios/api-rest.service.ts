import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share,map,catchError } from 'rxjs/operators';
import { obraSocialI } from 'src/app/interfaces/obraSocial';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }
  
  // retorna todas las obra sociales
  getObraSocial(url: any):Observable<obraSocialI[]>{
    return this.http.get<obraSocialI[]>(url)
      .pipe(
            share(),
            // tap(response => console.log(response)),
            //map(this.transformData)
            map(response => response),
            catchError(this.handleError('getData',url))
      )
  }

  // ver https://stackoverflow.com/questions/35326689/how-to-catch-exception-correctly-from-http-request
  private handleError(operation: String,url: any) {
    return (err: any) => {
        let errMsg = `error in ${operation}() retrieving ${url}`;
        console.log(`${errMsg}:`, err)
        if(err instanceof HttpErrorResponse) {
            // you could extract more info about the error if you want, e.g.:
            console.log(`status: ${err.status}, ${err.statusText}`);
            // errMsg = ...
        }
        return throwError(errMsg);
    }
  }
}
