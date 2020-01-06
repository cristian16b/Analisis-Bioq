import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {share} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { obraSocialI } from 'src/app/interfaces/obraSocial';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }

  // retorna todas las obra sociales
  getObraSocial(url: any):Observable<obraSocialI[]>{
    return this.http.get<obraSocialI[]>(url).pipe(share());
  }

  // 
}
