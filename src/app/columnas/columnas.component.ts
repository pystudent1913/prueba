import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-columnas',
  templateUrl: './columnas.component.html',
  styleUrls: ['./columnas.component.css']
})
export class ColumnasComponent implements OnInit{
  
  columnaForm: FormGroup;
  columnas: FormArray;
  myForm: FormGroup;
  lista_filas:any[] = [];
  @Input() filas;
  contador = 0;
  @Output() array_filas = new EventEmitter();

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
  }
  constructor(private fb: FormBuilder) {
    

  }
  


  ngOnInit() {
    this.columnaForm = this.fb.group({
      // email: '',
      columnas: this.fb.array([])
    });
    this.creadorCeros();

    // console.log(this.filas.value)
    // this.filas.value.item = "hoa cambiado"
    // console.log(this.filas.value)

    // this.setearFilas();
  }



  createItem(): FormGroup {
    return this.fb.group({
      item: ''
    });
  }

  creadorCeros(veces = 3) {
    for(let i = 0 ; i <  veces ; i++) {
      this.addItem();
    }
  }

  addItem(): void {
    this.columnas = this.columnaForm.get('columnas') as FormArray;
    this.columnas.push(this.createItem());
  }

  setearFilas() {
    // this.lista_filas.push(this.columnaForm.value);
    console.log(this.lista_filas)
    // console.log(this.lista_filas)
    // console.log("ñlista es: "+this.lista_filas)
    this.contador++;
  }


  printer () {
    console.log(this.columnaForm.value);
    this.array_filas_out()
    // console.log(this.columnaForm.value.columnas.length);
    // for (let i = 0 ; i < this.columnaForm.value.columnas.length; i ++) {
     
    // }
    // this.setearFilas()
    // console.log(this.lista_filas);
  }

  array_filas_out() {
    this.array_filas.emit(this.columnaForm.value);
  }


}
