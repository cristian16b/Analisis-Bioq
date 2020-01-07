import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];

  private listaObraSociales = [];

  //mover a un archivo de configuracion
  private url: string = 'https://my-json-server.typicode.com/cristian16b/Analisis-Bioq/obraSocial';

  constructor(private apiObraSociales:ApiRestService) { 
    //this.obtenerObrasSociales();
  }

  ngOnInit() {
    this.obtenerObrasSociales();
  }

  // para referencia de como cargar una tabla con un servicio y observables
  // ver el siguiente link:
  // https://stackoverflow.com/questions/54375073/cannot-use-observable-as-datasource-for-mattable-appears-empty
  obtenerObrasSociales(){
    this.apiObraSociales.getObraSocial(this.url)
      .subscribe(
        listaObraSociales => {
          this.listaObraSociales = listaObraSociales;
          console.log(this.listaObraSociales);
        }
      )
    ;
  }
}
