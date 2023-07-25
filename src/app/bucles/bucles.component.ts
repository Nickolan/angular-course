import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    { nombre:'John', edad:25},
    { nombre:'Pepe', edad:50},
    { nombre:'Nico', edad:20},
    { nombre:'Ronald', edad:36}
  ];
}
