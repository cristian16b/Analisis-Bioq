import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { obraSocialI } from 'src/app/interfaces/obraSocial';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  private listaObraSociales:Observable<obraSocialI[]>;

  //mover a un archivo de configuracion
  private url: string = 'https://my-json-server.typicode.com/cristian16b/Analisis-Bioq/obraSocial';

  constructor(private apiObraSociales:ApiRestService) { 
  }

  ngOnInit() {
    this.listaObraSociales = this.apiObraSociales.getObraSocial(this.url);
  }

}
