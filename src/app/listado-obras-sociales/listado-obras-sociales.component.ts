import { Component, OnInit , ViewChild } from '@angular/core';
import { ApiRestService } from 'src/app/servicios/api-rest.service';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];

  private listaObraSociales = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //mover a un archivo de configuracion
  private url: string = 'https://my-json-server.typicode.com/cristian16b/Analisis-Bioq/obraSocial';

  constructor(private apiObraSociales:ApiRestService) { 
    //this.obtenerObrasSociales();
  }

  ngOnInit() {
    this.obtenerObrasSociales();
    // activo la paginacion

  }

  // para referencia de como cargar una tabla con un servicio y observables
  // ver el siguiente link:
  // https://stackoverflow.com/questions/54375073/cannot-use-observable-as-datasource-for-mattable-appears-empty
  obtenerObrasSociales(){
    this.apiObraSociales.getObraSocial(this.url)
      .subscribe(
        listaObraSociales => {
          this.listaObraSociales = new MatTableDataSource(listaObraSociales);
          this.listaObraSociales.paginator = this.paginator;
          this.listaObraSociales.sort = this.sort;
          console.log(this.listaObraSociales);
        }
      )
    ;
  }
}
