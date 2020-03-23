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

  private listaObraSociales = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { 
  }

  ngOnInit() {

    // console.log(this.listadoObrasSociales);
    this.listaObraSociales = new MatTableDataSource(this.listadoObrasSociales);
    this.listaObraSociales.paginator = this.paginator;
    this.listaObraSociales.sort = this.sort;
    // console.log(this.listaObraSociales);
  }

  // metodo para pasar al componente padre (obra-social) la cantidad de filas de la tabla
  // puede hacerse con las directivas ng pero aca,se hace para mostrar comunicacion hijo->padre
  getCantidadFilas(){
    console.log('en el hijo');
    console.log(this.listadoObrasSociales);
    console.log(this.listadoObrasSociales.length);
    this.cantidadObrasSociales.emit(
      {
        cantidad: 5
      }
    );
  }
}
