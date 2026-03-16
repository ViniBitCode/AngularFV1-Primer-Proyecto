import { Component } from '@angular/core';
import { AuthRegisterFooter } from '../../register/components/auth-register-footer/auth-register-footer';
import { AuthRegisterHeader } from '../../register/components/auth-register-header/auth-register-header';
import { AuthRegisterForm } from '../../register/components/auth-register-form/auth-register-form';

@Component({
  selector: 'app-register',
  imports: [AuthRegisterFooter, AuthRegisterForm, AuthRegisterHeader],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
