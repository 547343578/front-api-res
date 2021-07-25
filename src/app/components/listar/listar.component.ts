import { Component, OnInit } from '@angular/core';
import {AlumnoServiceService} from '../../services/alumno-service.service';
import {Alumno} from '../../clases/Alumno';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnoServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(
      res => this.alumnos = res
    )
  }

  deleteAlumno(id:any, nombre:any, apellidos:any){
    return this.alumnosService.deleteAlumno(id)
      .subscribe(
        response => {
          console.log(response);
          swal.fire('Alumno eliminado', `${nombre} ${apellidos} eliminado`, 'success')
          .then(() => {location.reload()})
        },
        error => {
          console.log(error);
        })
  }
}


