import { Component } from '@angular/core';
import { AuthCardHeader } from '../auth-card-header/auth-card-header';
import { AuthCardForm } from '../auth-card-form/auth-card-form';
import { AuthCardFooter } from '../auth-card-footer/auth-card-footer';

@Component({
  selector: 'app-auth-card',
  imports: [AuthCardHeader, AuthCardForm, AuthCardFooter],
  templateUrl: './auth-card.html',
  styleUrl: './auth-card.scss',
})
export class AuthCard {

}
