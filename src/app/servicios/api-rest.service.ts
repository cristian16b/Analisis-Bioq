import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {share,map,tap } from 'rxjs/operators';
import { obraSocialI } from 'src/app/interfaces/obraSocial';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }

  // para referencia de como cargar una tabla con un servicio y observables
  // ver el siguiente link:
  // https://stackoverflow.com/questions/54375073/cannot-use-observable-as-datasource-for-mattable-appears-empty
  
  // retorna todas las obra sociales
  getObraSocial(url: any):Observable<obraSocialI[]>{
    return this.http.get<obraSocialI[]>(url)
      .pipe(share(),
            // tap(response => console.log(response)),
            map(response => response)
      );
  }

  // 
}
