import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100)
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

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }
}
