import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-obra-social',
  templateUrl: './crear-obra-social.component.html',
  styleUrls: ['./crear-obra-social.component.css']
})
export class CrearObraSocialComponent implements OnInit {

  public formGroup: FormGroup;

  private mensajesErrores: any = {
    'razonSocial' : {
      'minLength' : 'El nombre no debe tener menos de 3 caracteres',
      'maxLength' : 'El nombre no debe tener mas de 10 caracteres',
      'required'  : 'Campo obligatorio'
    },
    'fechaInicioActividad' : {
      'required'  : 'Campo obligatorio'
    },
    'email' : {
      'required'  : 'Campo obligatorio',
      'maxLength' : 'El correo no debe tener mas de 10 caracteres',
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
      email: 
          ['',
              [
                Validators.required,
                Validators.maxLength(100),
                Validators.email
              ]
          ]
    });
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
