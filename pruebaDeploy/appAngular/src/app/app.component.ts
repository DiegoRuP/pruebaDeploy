import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SueldosApiService } from './sueldos-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'proyectoAngularSueldos';

  sueldoForm!: FormGroup;
  resultadoSueldo: any;

  constructor(private sueldoApi: SueldosApiService) {}

  ngOnInit() {
    this.sueldoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      horasTrabajadas: new FormControl('', [Validators.required, Validators.min(1)]),
      pagoPorHora: new FormControl('', [Validators.required, Validators.min(1)]),
      categoria: new FormControl('', [Validators.required])
    });
  }

  enviar() {
    if (this.sueldoForm.valid) {
      const datosTrabajador = this.sueldoForm.value;
      this.sueldoApi.calcularSueldo(datosTrabajador).subscribe(
        (respuesta: any) => {
          this.resultadoSueldo = respuesta;
          console.log('Respuesta de la API:', respuesta);
        },
        (error: any) => {
          console.error('Error al consumir la API:', error);
        }
      );
    }
  }
}
