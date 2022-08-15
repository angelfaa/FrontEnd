import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  usuarioE:string='';

  constructor(private sExperiencia: SExperienciaService, private router: Router,private token:TokenService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE,this.token.getUsername()); 
    let j:number=0,expes:Experiencia[]=[];
      this.sExperiencia.lista().subscribe(data => { expes=data;for(let a of expes)
      {if(a.usuarioE==expe.usuarioE&&a.nombreE==expe.nombreE){j=1;break}}
    if(j==1){
      alert("Expeciencia ya Existe")
      this.nombreE='';
      this.descripcionE= '';
    
    }else{
      this.sExperiencia.save(expe).subscribe(
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
