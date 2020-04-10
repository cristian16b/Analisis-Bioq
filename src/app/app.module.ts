import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ObraSocialComponent } from './obra-social/obra-social.component';
import { PacienteComponent } from './paciente/paciente.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { ListadoObrasSocialesComponent } from './listado-obras-sociales/listado-obras-sociales.component';
import { FilaObraSocialComponent } from './fila-obra-social/fila-obra-social.component';
import { CrearObraSocialComponent } from './crear-obra-social/crear-obra-social.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule} from '@angular/material/table';
import { ApiRestService } from './servicios/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort'; 
import { getEspPaginatorIntl } from './paginadorEspañol/paginador';
import { MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter"; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from './calendarioEspañol/calendario';
import { StrpadPipe } from './pipes/strpad.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

const routes: Routes = [
  {
    path:'obraSocial',
    component:ObraSocialComponent
  },
  {
    path:'paciente',
    component:PacienteComponent
  },
  {
    path:'laboratorio',
    component:LaboratorioComponent
  },
  {
    // por defecto cuando se inicia el sistema muestra el home
    path: '',
    component:HomeComponent
  },
  {
    path: "laboratorio/:tipo",
    component: LaboratorioComponent
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    ObraSocialComponent,
    PacienteComponent,
    LaboratorioComponent,
    ListadoObrasSocialesComponent,
    FilaObraSocialComponent,
    CrearObraSocialComponent,
    HomeComponent,
    StrpadPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [ApiRestService,
    // defino un paginador traducido al español
    { provide: MatPaginatorIntl, useValue: getEspPaginatorIntl() },
    {provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
