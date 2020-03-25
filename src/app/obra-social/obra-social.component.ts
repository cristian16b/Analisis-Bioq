import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import { Observable } from 'rxjs';
import { obraSocialI } from '../interfaces/obraSocial';

@Component({
  selector: 'app-obra-social',
  templateUrl: './obra-social.component.html',
  styleUrls: ['./obra-social.component.css']
})
export class ObraSocialComponent implements OnInit {

  //mover a un archivo de configuracion
  private url: string = 'https://my-json-server.typicode.com/cristian16b/Analisis-Bioq/obraSocial';

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
    this.listadoObservable = this.apiObraSociales.getObraSocial(this.url);
    this.listadoObservable.subscribe(data => {
      //obtengo la info del observable
        console.log('llegan los datos al padre');
        this.listadoOOSS = data;
        console.log(this.listadoOOSS);
    })
  }

  // recibo la cantidad de filas desde el componente hijo
  getCantidad(evento){
    this.cantidad = evento.cantidad;
  }
}
