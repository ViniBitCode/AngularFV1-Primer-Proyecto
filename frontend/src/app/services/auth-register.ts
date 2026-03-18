import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthRegister {
  private http = inject(HttpClient);

  registrar(datos: any) {
    return this.http.post('http://localhost:8080/registro', datos, { responseType: 'text' });
  }

  login(datos: any) {
    return this.http.post('http://localhost:8080/cuarta-pagina-login', datos);
  }

}
