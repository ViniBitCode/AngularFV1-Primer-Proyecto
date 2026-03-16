import { Component, output } from '@angular/core';

@Component({
  selector: 'app-third',
  imports: [],
  templateUrl: './third.html',
  styleUrl: './third.scss',
})
export class Third {

  textoParaElPadre = output<string>();
  enviarTexto() {
    this.textoParaElPadre.emit("Hola desde el tercer componente!");
  }

}
