import { Component, OnInit , ViewChild , Input , Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { obraSocialI } from 'src/app/interfaces/obraSocial'

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  @Input() listadoObrasSociales: obraSocialI[];
  @Output() cantidadObrasSociales = new EventEmitter();

  displayedColumns: string[] = ['position', 'name'];

  dataSource: MatTableDataSource<obraSocialI>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { 
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.listadoObrasSociales);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log(this.listadoObrasSociales);
  }

  ngOnChanges() {
    if(this.listadoObrasSociales) {
      console.log('llegan los datos al hijo');
      console.log(this.listadoObrasSociales);
      this.dataSource = new MatTableDataSource(this.listadoObrasSociales);
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
}
