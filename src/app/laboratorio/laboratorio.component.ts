import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  private listadoVisualizar:any;
  private listado:any = {
    'hemograma' : 
      [
          'hemoglobina',
          'globulos rojos',
          'globulos blancos'
      ]
    ,
    'colesterol' : 
        [
          'colesterol total',
          'trigliceridos',
          'otros'
        ]
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      let parametro = parametros.get('tipo');
      console.log(parametro);
      if(parametro !== '')
        this.listadoVisualizar = this.listado[parametro];
      console.log(this.listadoVisualizar);
    })
  }
}
