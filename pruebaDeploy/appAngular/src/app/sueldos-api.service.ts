import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SueldosApiService {
  private apiUrl = 'http://localhost:3000/calculoSueldo';

  constructor(private http: HttpClient) { }

  calcularSueldo(datosTrabajador: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datosTrabajador);
  }
}
