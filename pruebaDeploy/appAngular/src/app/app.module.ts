import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { SueldosApiService } from './sueldos-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Asegúrate de incluir ReactiveFormsModule en imports
    HttpClientModule // Asegúrate de incluir HttpClientModule en imports
  ],
  providers: [SueldosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
