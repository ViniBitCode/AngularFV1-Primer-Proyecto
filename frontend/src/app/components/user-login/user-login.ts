import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.scss',
})
export class UserLogin {

  nombre_user: string = 'Facundo';
  framework_favorito: string = '';

  mostrar_field(){
    alert(this.framework_favorito);
  }
}
