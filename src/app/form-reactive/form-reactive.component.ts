import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  constructor(private fb: FormBuilder){

  }

 get name(){
  return this.formUser.get('name') as FormControl
 } 

 get email(){
  return this.formUser.get('email') as FormControl
 }
 
 formUser = this.fb.group({
    "name": ['', Validators.required],
    "email": ['', [Validators.required, Validators.email]]
 })

  // formUser = new FormGroup({
  //   "name": new FormControl('', Validators.required),
  //   "email": new FormControl('', [Validators.required, Validators.email])
  // });


  procesar() {
    console.log(this.formUser.value);
    
  }
  
}
