import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-card-footer',
  imports: [],
  templateUrl: './auth-card-footer.html',
  styleUrl: './auth-card-footer.scss',
})
export class AuthCardFooter {

  constructor(private router: Router) { }

  mensaje_prueba:string = "Hola, soy un mensaje de prueba";
  login(){
    alert(this.mensaje_prueba);
  }

  register(){
    this.router.navigate(['/registro'])
  }

}
