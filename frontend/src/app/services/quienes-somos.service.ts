import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  constructor(private http:HttpClient) { }
  url="https://deploy-demo-wv74.onrender.com/api/v1/team";
  
  obtenerProfesionales(): Observable<any>{
    return this.http.get(this.url);
  }

  crearProfesional(profesional:any):Observable<any>{
    return this.http.post(this.url,profesional);
  }
}
