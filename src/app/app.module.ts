import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { ColumnasComponent } from './columnas/columnas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    ColumnasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
    // FormBuilder, 
    // FormGroup, 
    // FormArray
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
