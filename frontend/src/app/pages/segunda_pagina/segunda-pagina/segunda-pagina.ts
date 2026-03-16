import { Component } from '@angular/core';
import { Fifth } from '../../../components/fifth/fifth';
import { UserLogin } from '../../../components/user-login/user-login';
import { ReactiveForm } from '../../../components/reactive-form/reactive-form';

@Component({
  selector: 'app-segunda-pagina',
  imports: [Fifth, UserLogin, ReactiveForm],
  templateUrl: './segunda-pagina.html',
  styleUrl: './segunda-pagina.scss',
})
export class SegundaPagina {

}
