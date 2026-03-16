import { Component, input } from '@angular/core';
import { Third } from '../third/third';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [Third, NgOptimizedImage],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {

  // Variable de tipo boolean para mostrar o ocultar un mensaje con @if
  isServerRunning = true;

  // Array de objetos para mostrar una lista de usuarios con @for
  users = [
    { name: 'Facundo', age: 28 },
    { name: 'Sofia', age: 25 },
    { name: 'Lihuel', age: 30 }
  ];

  // Variable de tipo boolean para habilitar o deshabilitar un botón con el uso de Binds
  isEditable = true;

  // Variable de tipo string para mostrar un mensaje con Eventos (mouseover)
  mensaje = ""
  mostrarMensaje() {
    this.mensaje = "Hola amigos de GitHub!";
  }

  // Uso de Input() - mandar desdel componente padre un valor al componente hijo
  primerInputNombre = input<string>();

  // uso de Output() - mandar desde el componente hijo un valor al componente padre
  textoRecibido = "";
  guardarTexto(texto: string) {
    this.textoRecibido = texto;
  }

  // Ejemplo para imagen dinamica
  texto_imagen = "Ejemplo de imagen dinámica";
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  logoAlt = 'Angular Logo';

}
