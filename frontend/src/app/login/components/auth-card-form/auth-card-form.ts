import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth-card-form',
  standalone: true, // Agregalo explícitamente por las dudas
  imports: [
    ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ],
  templateUrl: './auth-card-form.html',
  styleUrl: './auth-card-form.scss',
})
export class AuthCardForm {

  login_form = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });


}
