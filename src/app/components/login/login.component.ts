import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);    
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.error(err.error.mensaje)

      })
      
      
  }
  verificar(){
    if (this.nombreUsuario == undefined|| this.password === undefined||this.nombreUsuario.trim() === '') {
      if (this.password == undefined) { 
        const box=document.getElementById("password");
        const box1=document.getElementById("sp3");
        box.classList.add('error1');
        box1.classList.remove('off');
        box1.classList.add('on');
      }
      if (this.nombreUsuario == undefined || this.nombreUsuario.trim() == '') { 
        const box2=document.getElementById("nombreUsuario");
        const box3=document.getElementById("sp1");
        box2.classList.add('error1');
        box3.classList.remove('off');
        box3.classList.add('on');
      }      
    }else {}
  }
  log1(){
    const box=document.getElementById("password");
    const box1=document.getElementById("sp3");
    const box2=document.getElementById("sp4");
    box.classList.remove('error1');
    if(box1.classList.contains('on')){   
      box1.classList.remove('on');
      box1.classList.add('off');
    }
    if(box2.classList.contains('on')){   
      box2.classList.remove('on');
      box2.classList.add('off');
    }
  }
  log(){
    const box=document.getElementById("nombreUsuario");
    const box1=document.getElementById("sp1");
    const box2=document.getElementById("sp2");
    if(box1.classList.contains('on')){   
      box1.classList.remove('on');
      box1.classList.add('off');
    }
    if(box2.classList.contains('on')){   
      box2.classList.remove('on');
      box2.classList.add('off');
    }
    box.classList.remove('error1');
  }
  error(errMsj:string){
    if(errMsj=='El Nombre de Usuario no Existe'){
      const box2=document.getElementById("nombreUsuario");
      const box3=document.getElementById("sp2");
      box2.classList.add('error1');
      box3.classList.remove('off');
      box3.classList.add('on');
    }else{
      const box1=document.getElementById("sp3");
      if(this.password!=undefined){ 
        const box2=document.getElementById("password");
        const box3=document.getElementById("sp4");
        box2.classList.add('error1');
        box3.classList.remove('off');
        box3.classList.add('on');
        this.errMsj='';
      }
    }
  }

}

