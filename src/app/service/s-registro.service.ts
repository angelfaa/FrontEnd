import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { Registro } from '../model/registro';

@Injectable({
  providedIn: 'root'
})
export class SRegistro {
  expURL='https://beproyecto.herokuapp.com/auth/';
  
  constructor(private httpClient: HttpClient) { }
  public save(experiencia: Registro): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'nuevo', experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}