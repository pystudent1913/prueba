import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tablaForm: FormGroup;
  filas: FormArray;
  myForm: FormGroup;
  lista_filas = [];
  
  onSubmit(form: FormGroup) {

  }
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.tablaForm = this.fb.group({
      // email: '',
      filas: this.fb.array([ this.createItem() ])
    });

    // this.creadorCeros();
  }

  createItem(): FormGroup {
    return this.fb.group({
      item: "hola",
    });
  }

  // creadorCeros(veces = 3) {
  //   for(let i = 0 ; i <  veces ; i++) {
  //     this.addItem();
  //   }
  // }

  addItem(): void {
    this.filas = this.tablaForm.get('filas') as FormArray;
    this.filas.push(this.createItem());
  }

  printer () {
    console.log(this.tablaForm.value);
  }

  getLista (event) {
    this.lista_filas.push(event);
    console.log(this.lista_filas);
    console.log("esto es imprimiio en el")
  }

}
