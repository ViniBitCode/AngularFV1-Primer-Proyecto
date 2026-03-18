import { Component, signal, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthRegister } from '../../../services/auth-register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-card-form',
  standalone: true, // Agregalo explícitamente por las dudas
  imports: [
    ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatIconModule, MatButtonModule

  ],
  templateUrl: './auth-card-form.html',
  styleUrl: './auth-card-form.scss',
})
export class AuthCardForm {

  constructor(private router: Router) { }

  private authRegister = inject(AuthRegister);

  login_form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  hide_password = signal(true);
  clickEvent_password(event: MouseEvent) {

    this.hide_password.set(!this.hide_password());
    event.stopPropagation();

  }

  loguearUsuario() {

    this.authRegister.login(this.login_form.value).subscribe({
      next: (user: any) => {
        alert("¡Bienvenido " + user.nombre + "!");
        this.login_form.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert("Credenciales incorrectas, Reintenta.");
      }
    });
  }
}
