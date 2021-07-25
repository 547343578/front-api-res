import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // permite comunicar con backend
import { Alumno } from '../clases/Alumno'
import {Observable} from 'rxjs'; // para datos asincronas, hacer programa reactiva

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  URL: string = 'http://localhost:8080/api/';

  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getAlumnos() : Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.URL}list`);
  }

  getAlumno(id: any) : Observable<Alumno>{
    return this.http.get<Alumno>(`${this.URL}alumno/${id}`);
  }

  saveAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(`${this.URL}save`, alumno, {headers:this.httpHeaders});
  }

  deleteAlumno(id:any):Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.URL}delete/${id}`);
  }

  updateAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.put<Alumno>(`${this.URL}update/${alumno.id}`, alumno,  {headers:this.httpHeaders});
  }
}
