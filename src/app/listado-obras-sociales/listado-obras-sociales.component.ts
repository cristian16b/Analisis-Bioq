import { Component, OnInit , ViewChild , Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { obraSocialI } from 'src/app/interfaces/obraSocial'

@Component({
  selector: 'app-listado-obras-sociales',
  templateUrl: './listado-obras-sociales.component.html',
  styleUrls: ['./listado-obras-sociales.component.css']
})
export class ListadoObrasSocialesComponent implements OnInit {

  @Input() listadoObrasSociales: obraSocialI[];

  displayedColumns: string[] = ['position', 'name'];

  private listaObraSociales = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { 
  }

  ngOnInit() {

    console.log(this.listadoObrasSociales);
    this.listaObraSociales = new MatTableDataSource(this.listadoObrasSociales);
    this.listaObraSociales.paginator = this.paginator;
    this.listaObraSociales.sort = this.sort;
    // console.log(this.listaObraSociales);
  }
}
