import { Component, OnInit , ViewChild , Input , Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { obraSocialI } from 'src/app/interfaces/obraSocial';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  @Input() listadoObrasSociales: obraSocialI[];
  @Output() cantidadObrasSociales = new EventEmitter();

  // tener en cuenta que las displayedColumns () 
  // coincidan con la definicion en el html de ng-container matColumnDef="id"
  // y coincidan con la info que se le pasa en el array o json en data source
  // https://stackoverflow.com/questions/51956555/angular-material-table-sorting-not-working
  displayedColumns: string[] = ['id', 'title'];

  dataSource: MatTableDataSource<obraSocialI>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // como cambiar el idioma del paginador que viene por defecto
  // https://es.stackoverflow.com/questions/260851/como-cambio-el-idioma-en-angular-material
  constructor() {
  }

  ngOnInit() {
    // repasar el ciclo de vida de los componentes
    // como los datos vienen de una api-rest al padre, luego son enviados por el pipe de @input
    // no se si tiene sentido hacerlo aca

    // this.dataSource = new MatTableDataSource(this.listadoObrasSociales);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // console.log(this.listadoObrasSociales);
  }

  ngOnChanges() {
    if(this.listadoObrasSociales) {
      this.dataSource = new MatTableDataSource(this.listadoObrasSociales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.listadoObrasSociales);
    }
  }

  // metodo para pasar al componente padre (obra-social) la cantidad de filas de la tabla
  // puede hacerse con las directivas ng pero aca,se hace para mostrar comunicacion hijo->padre
  getCantidadFilas(evento){
    this.cantidadObrasSociales.emit(
      {
        cantidad: this.listadoObrasSociales.length
      }
    );
  }

  // https://stackoverflow.com/questions/59850607/how-to-know-if-the-next-or-previous-button-of-mat-paginator-is-clicked
  paginacionEventos(event: any) {

    console.log(event);

    if (event.previousPageIndex > event.pageIndex) {
      // previous button clicked
      console.log('anterior');
    } else {
     // next button clicked
      console.log('siguiente');
    }
    // tener en cuenta para cuando se hagan las peticiones
    // https://justcodeit.io/paginacion-en-angular-dos-componentes-un-servicio/
 }
}
