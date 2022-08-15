import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  expe: Experiencia[] = [];
  cosas: Experiencia[] = [];
  ldefault:Experiencia[]=[]


  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    if(this.isLogged ){   
     this.sExperiencia.lista().subscribe(data => { this.expe=data; for(let a of this.expe)
     {if(a.usuarioE===this.tokenService.getUsername()){this.cosas.push(a);}}})
    } 
    
    
  }
  
  
  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  
}
