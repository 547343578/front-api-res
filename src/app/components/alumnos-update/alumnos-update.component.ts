import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../clases/Alumno';
import {AlumnoServiceService} from '../../services/alumno-service.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-alumnos-update',
  templateUrl: './alumnos-update.component.html',
  styleUrls: ['./alumnos-update.component.css']
})
export class AlumnosUpdateComponent implements OnInit {

  alumno:Alumno = new Alumno();

  constructor(private alumnoService:AlumnoServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  modificarAlumno(){
    return this.alumnoService.updateAlumno(this.alumno)
    .subscribe(
      res =>{this.router.navigate(['/']),
      swal.fire('Alumno modificado', `${res.nombre} ${res.apellidos} modificado`, 'success' ) 
    }
    )
  }
}
