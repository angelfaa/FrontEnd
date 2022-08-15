import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private educacion: EducacionService, private router: Router,private token:TokenService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Educacion(this.nombreE, this.descripcionE,this.token.getUsername()); 
    let j:number=0,expes:Educacion[]=[];
      this.educacion.lista().subscribe(data => { expes=data;for(let a of expes)
      {if(a.usuarioE==expe.usuarioE&&a.nombreE==expe.nombreE){j=1;break}}
    if(j==1){
      alert("Educacion ya Existe")
      this.nombreE='';
      this.descripcionE= '';
    
    }else{
      this.educacion.save(expe).subscribe(
        data => {
          alert("Experiencia añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }}) 
  }
}
