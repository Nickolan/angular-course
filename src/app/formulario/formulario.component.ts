import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  OpenAlert: boolean = false;

  mostrar_consola(name:string){
    console.log('Hola ' + name);
    this.OpenAlert = true;
  }
}
