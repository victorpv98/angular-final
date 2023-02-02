import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  contra:string='';
  usuario:string='';
  hide = true;
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  redireccion = '';

  login(){
      this.autenticacion.login();
      this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate([this.redireccion]);

  }

}
