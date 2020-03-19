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

  private listadoOOSS:Observable<obraSocialI[]>;

  constructor(private apiObraSociales:ApiRestService) { 
      
  }

  ngOnInit() {
    this.obtenerObrasSociales();
    console.log(this.listadoOOSS);
  }

  obtenerObrasSociales(){
    this.listadoOOSS = this.apiObraSociales.getObraSocial(this.url);
  }
}
