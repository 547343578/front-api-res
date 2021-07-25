import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlumnoServiceService} from '../../services/alumno-service.service';
import {Alumno} from '../../clases/Alumno';
import swal from 'sweetalert2';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumno:Alumno = new Alumno();

  constructor(private router:Router, private alumnoService:AlumnoServiceService) { }

  ngOnInit(): void {
  }

  createAlumno(){
    return this.alumnoService.saveAlumno(this.alumno).subscribe(
      res =>{this.router.navigate(['/']),
      swal.fire('Alumno nuevo', `${res.nombre} ${res.apellidos} creado`, 'success'  ) // un modulo para las alertas mas claras : npm i sweetalert2
      },
      err => console.error(err)
    )
  }

}
