import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ObraSocialComponent } from './obra-social/obra-social.component';
import { PacienteComponent } from './paciente/paciente.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

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
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    ObraSocialComponent,
    PacienteComponent,
    LaboratorioComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
