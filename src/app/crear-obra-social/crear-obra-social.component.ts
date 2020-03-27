import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-obra-social',
  templateUrl: './crear-obra-social.component.html',
  styleUrls: ['./crear-obra-social.component.css']
})
export class CrearObraSocialComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      razonSocial: '',
      fechaInicioActividad: '',
      email: ''
    });
  }



}
