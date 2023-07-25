import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent {
  persona = {
    nombre: '',
    edad: null
  }

  procesar(){
    console.log(this.persona)
  }
}
