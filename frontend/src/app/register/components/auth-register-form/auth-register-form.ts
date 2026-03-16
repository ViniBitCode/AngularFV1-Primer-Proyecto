import { Component, inject, Inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthRegister } from '../../../services/auth-register';

@Component({
  selector: 'app-auth-register-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './auth-register-form.html',
  styleUrl: './auth-register-form.scss',
})
export class AuthRegisterForm {

  private authRegister = inject(AuthRegister);

  register_form = new FormGroup({
    password: new FormControl('', Validators.required),
    repeat_password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl(''),
  });

  hide_password = signal(true);
  clickEvent_password(event: MouseEvent) {

    this.hide_password.set(!this.hide_password());
    event.stopPropagation();

  }


  hide_password_repeat = signal(true);
  clickEvent_password_repeat(event: MouseEvent) {

    this.hide_password_repeat.set(!this.hide_password_repeat());
    event.stopPropagation();

  }



  registrarUsuario() {
    if (this.register_form.valid) {

      const datos = this.register_form.value;
      delete datos.repeat_password;

      this.authRegister.registrar(datos).subscribe({
        next: (res) => {
          alert("¡Registrado con éxito!");
          this.register_form.reset();
        },
        error: (err) => {
          console.error("Error desde Spring:", err);
          alert("Hubo un error, fijate la consola de Java.");
        }
      });
    }
  }
}
