import { Component, OnInit } from '@angular/core';
import {Alumno} from '../../clases/Alumno';
import {AlumnoServiceService} from '../../services/alumno-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-alumnos-update',
  templateUrl: './alumnos-update.component.html',
  styleUrls: ['./alumnos-update.component.css']
})
export class AlumnosUpdateComponent implements OnInit {
  
  alumno:Alumno = new Alumno();

  constructor(private alumnoService:AlumnoServiceService, private router:ActivatedRoute, private router_:Router) { }

  ngOnInit(): void {
    const params = this.router.snapshot.params;
    if(params.id){
      this.alumnoService.getAlumno(params.id)
      .subscribe(
        res => {
          this.alumno = res;
        }
      )
    }
  }

  modificarAlumno(){
    return this.alumnoService.updateAlumno(this.alumno).subscribe(
      res => {
        this.router_.navigate(['/']),
        swal.fire('Alumno modificado', `${this.alumno.nombre} ${this.alumno.apellidos} modificado`, 'success'  )
      }
    )
  }
}
