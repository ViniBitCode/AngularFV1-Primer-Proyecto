import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register-footer',
  standalone: true,
  imports: [],
  templateUrl: './auth-register-footer.html',
  styleUrl: './auth-register-footer.scss',
})
export class AuthRegisterFooter {

  constructor(private router: Router) {}

  @Output() registrarUsuarioClick = new EventEmitter<void>();

  registrarUsuario() {
    this.registrarUsuarioClick.emit();
  }

  irLogin() {
    this.router.navigate(['/cuarta-pagina-login']);
  }


}
