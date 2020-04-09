import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgForm } from '@angular/forms';
import { obraSocial } from '../interfaces/obraSocial';

@Component({
  selector: 'app-crear-obra-social',
  templateUrl: './crear-obra-social.component.html',
  styleUrls: ['./crear-obra-social.component.css']
})
export class CrearObraSocialComponent implements OnInit {

  // objeto del tipo obra social
  public obraSocialNueva: obraSocial;

  // formulario 
  public formGroup: FormGroup;

  private mensajesErrores: any = {
    'razonSocial' : {
      'minlength' : 'El nombre no debe tener menos de 3 caracteres',
      'maxlength' : 'El nombre no debe tener mas de 10 caracteres',
      'required'  : 'Campo obligatorio'
    },
    'fechaInicioActividad' : {
      'required'  : 'Campo obligatorio'
    },
    'email' : {
      'required'  : 'Campo obligatorio',
      'maxlength' : 'El correo no debe tener mas de 10 caracteres',
      'email'     : 'El formato del correo no es correcto',
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      razonSocial: 
          ['',
              [
                Validators.minLength(3),
                Validators.maxLength(10),
                Validators.required
              ]
          ],
      fechaInicioActividad: 
          ['',
            [
              Validators.required,
            ]
          ],
          // el siguiete es el listado de correos (1-N)
      listadoEmail: this.formBuilder.array
          (
            [this.crearPrimerEmailInput()],
            [Validators.required]
          )
    });
  }

  get listadoEmail(): FormArray {
    return this.formGroup.get('listadoEmail') as FormArray;
  }

  public getErrorFormArray(control:any,controlName:string)
  {
    let error = '';
    if (control.touched && control.errors != null) {

      // la variable 'control.errors' nos devuelve un par del tipo '{"required":true}' 
      let key = Object.keys(control.errors)[0];
      let value = Object.values(control.errors)[0];
      // console.log(key);
      // console.log(this.mensajesErrores[controlName][key]);
      error = this.mensajesErrores[controlName][key];
    }

    return error;
  }

  public anadirEmail() {
    const nuevo = this.formBuilder.group({
      email: ['',
                [
                  Validators.required,
                  Validators.maxLength(100),
                  Validators.email
                ]
              ]
            }
    );

    this.listadoEmail.push(nuevo);
  }  

  public crearPrimerEmailInput(){
    return this.formBuilder.group({
      email: ['',
                [
                  Validators.required,
                  Validators.maxLength(100),
                  Validators.email
                ]
              ]
            });
  }

  public borrarEmail(indice: number) {
    this.listadoEmail.removeAt(indice);
  }

  // to-review https://github.com/mgalante/curso-angular/blob/master/formularios-reactivos.md
  public getError(controlName: string): string {
    // retorna los datos ingresados en el form
    // console.log( this.formGroup.value);
    // 
    let error = '';
    const control = this.formGroup.get(controlName);

    if (control.touched && control.errors != null) {
      // console.log('entra');
      // la variable 'control.errors' nos devuelve un par del tipo '{"required":true}' 
      let key = Object.keys(control.errors)[0];
      let value = Object.values(control.errors)[0];
      // console.log(key);
      // console.log(this.mensajesErrores[controlName][key]);
      error = this.mensajesErrores[controlName][key];
    }
    
    return error;
  }

  // evento submit del formulario
  public register(f:NgForm) {
    if (this.formGroup.valid) {
      // convierto el formgroup to model object
      this.obraSocialNueva = new obraSocial(this.formGroup.value);
      // muestro un pequeño tostring
      console.log(this.obraSocialNueva.toStringCreada());

      f.resetForm();
    }
    else {
      console.log('formulario invalido');
    }
  }

  public resetearFormulario(){
    this.formGroup.reset();
  }
}
