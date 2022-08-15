import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  expe: Educacion[] = [];
  cosas: Educacion[] = [];
  ldefault:Educacion[]=[]


  constructor(private Educacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }this.cargarEducacion();
  }

  cargarEducacion(): void {
    if(this.isLogged ){   
      this.Educacion.lista().subscribe(data => { this.expe=data; for(let a of this.expe)
      {if(a.usuarioE===this.tokenService.getUsername()){this.cosas.push(a);}}})
     } 
  
  }
  delete(id?: number){
    if(id != undefined){
      this.Educacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la Educacion");
        }
      )
    }
  }

}

