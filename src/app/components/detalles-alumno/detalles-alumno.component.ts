import { Component, OnInit } from '@angular/core';
import {AlumnoServiceService} from '../../services/alumno-service.service'
import {Alumno} from '../../clases/Alumno';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css']
})
export class DetallesAlumnoComponent implements OnInit {

  alumno:Alumno = new Alumno();

  constructor(private activatedRoute:ActivatedRoute, private alumnoService:AlumnoServiceService) { }

  ngOnInit(): void {
    this.detallesAlumno();
  }

  detallesAlumno(){
    return this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.alumnoService.getAlumno(id).subscribe(
            (alumno:any) => this.alumno = alumno
          )
        }
      }
    )
  }

}
