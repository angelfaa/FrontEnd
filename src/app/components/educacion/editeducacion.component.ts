import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  expLab:Educacion=null;

  constructor(private educacion:EducacionService,private activartedRouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    const id=this.activartedRouter.snapshot.params['id'];
    this.educacion.details(id).subscribe(data=>{this.expLab=data;},err=>{alert("Error al modificar experiencia");
    this.router.navigate(['']);
    })
  }
  onUpdate():void{
    const id=this.activartedRouter.snapshot.params['id'];
    this.educacion.update(id,this.expLab).subscribe(data =>{this.router.navigate([''])
  },err=>{alert("Error al modificar experiencia");this.router.navigate(['']);
  }
  )
  }

}
