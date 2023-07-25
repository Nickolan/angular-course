import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    
  }

  numero: number = 1;

  decrementar(){
    if (this.numero > 0) { 
      this.numero--;
    }
  }

  incrementar(){
    
    this.numero++;
  }
}
