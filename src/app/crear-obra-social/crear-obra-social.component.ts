import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      razonSocial: 
          ['',
              [
                Validators.minLength(3),
                Validators.maxLength(100),
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
    console.log( this.formGroup.value);
    // 
    let error = '';
    const control = this.formGroup.get(controlName);
    // console.log(control);
    if (control.touched && control.errors) {
      error = JSON.stringify(control.errors);
      console.log(controlName + '- error: ' + control.errors);
    }
    return error;
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }
}
