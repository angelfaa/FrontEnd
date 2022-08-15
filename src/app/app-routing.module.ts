import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent },
  {path:'pro1',component:TrabajosComponent },
  {path:'nuevoexp',component:NewExperienciaComponent },
  {path:'editexp/:id',component:EditExperienciaComponent },
  {path:'nuevaedu',component:NeweducacionComponent },
  {path:'editedu/:id',component:EditeducacionComponent },
  {path:'registro',component:RegistroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
