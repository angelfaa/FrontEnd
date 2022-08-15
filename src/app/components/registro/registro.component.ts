import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/model/registro';
import { SRegistro } from 'src/app/service/s-registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre:string='';
  nombreUsuario:string='';
  email:string='' ;
  password:string='';
  constructor(private router:Router,private registro:SRegistro) { }

  ngOnInit(): void {
  }
  
  login(){
    this.router.navigate(['/login']);
  }
  registrar(): void {
    const expe = new Registro(this.nombre, this.nombreUsuario,this.email,this.password);  
    this.registro.save(expe).subscribe(
      data => {
        alert("Se Creo el Usuario");
        this.router.navigate(['']);
      }, err => {
        if(this.nombre==""||this.nombreUsuario==''||this.email==''||this.password==''){
          alert("no puede haber campos vacio")
        }else{
        alert("Nombre de usuario en uso");
      
        this.nombreUsuario='' }
      
      }
    )
  }
}
