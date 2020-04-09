import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import { Observable } from 'rxjs';
import { obraSocialI } from '../interfaces/obraSocial';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.css']
})
export class ObraSocialComponent implements OnInit {

  private listadoObservable: Observable<obraSocialI[]>;
  private listadoOOSS: obraSocialI[];

  private cantidad:number;

  constructor(private apiObraSociales:ApiRestService) { 
      this.cantidad = 0;
  }

  ngOnInit() {
    this.obtenerObrasSociales();
  }

  obtenerObrasSociales(){
    this.listadoObservable = this.apiObraSociales.getObraSocial(environment.apiUrlObrasSocialesBase);
    this.listadoObservable.subscribe(data => {
      //obtengo la info del observable
      this.listadoOOSS = data;
    })
  }

  // recibo la cantidad de filas desde el componente hijo
  getCantidad(evento){
    this.cantidad = evento.cantidad;
  }
}
