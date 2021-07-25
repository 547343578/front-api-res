import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DetallesAlumnoComponent } from './components/detalles-alumno/detalles-alumno.component';
import {FormsModule} from '@angular/forms';
import { AlumnosUpdateComponent } from './components/alumnos-update/alumnos-update.component';

// 配置路由器信息， 根据指令决定显示哪个组件
const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'agregar', component: AlumnosComponent},
  {path: 'alumno/:id', component: DetallesAlumnoComponent},  // 路由配置，和 ActivatedRoute.params[id] 搭配使用，在detallesAlumnos里
  {path: 'alumno-update/:id', component: AlumnosUpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NavegacionComponent,
    AlumnosComponent,
    DetallesAlumnoComponent,
    AlumnosUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
