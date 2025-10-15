import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {

  form!:FormGroup;

  public constructor(private formBuilder:FormBuilder)
  {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required]]
      }
      )
  }

  get Password()
  {
    return this.form.get("password");
  }

  get Email()
  {
    return this.form.get("email");
  }


}
