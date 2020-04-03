import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-crear-obra-social',
  templateUrl: './crear-obra-social.component.html',
  styleUrls: ['./crear-obra-social.component.css']
})
export class CrearObraSocialComponent implements OnInit {

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
          ([])
      // email: 
      //     ['',
      //         [
      //           Validators.required,
      //           Validators.maxLength(100),
      //           Validators.email
      //         ]
      //     ]
    });
  }

  get listadoEmail(): FormArray {
    return this.formGroup.get('listadoEmail') as FormArray;
  }

  public anadirEmail() {
    const nuevo = this.formBuilder.group({
     email: 
          ['',
              [
                Validators.required,
                Validators.maxLength(100),
                Validators.email
              ]
          ]
    });
    
    this.listadoEmail.push(nuevo);
  }  

  public borrarTrabajo(indice: number) {
    this.listadoEmail.removeAt(indice);
  }

  // to-review https://github.com/mgalante/curso-angular/blob/master/formularios-reactivos.md
  public getError(controlName: string): string {
    // retorna los datos ingresados en el form
    // console.log( this.formGroup.value);
    // 
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors) {

      // la variable 'control.errors' nos devuelve un par del tipo '{"required":true}' 
      let key = Object.keys(control.errors)[0];
      let value = Object.values(control.errors)[0];
      console.log(key);
      // console.log(this.mensajesErrores[controlName][key]);
      error = this.mensajesErrores[controlName][key];
    }
    return error;
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }

  public resetearFormulario(){
    this.formGroup.reset();
  }
}
