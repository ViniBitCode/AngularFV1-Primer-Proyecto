import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthRegister {
  private http = inject(HttpClient);

  private url = 'http://localhost:8080/registro';

  registrar(datos: any) {
    return this.http.post(this.url, datos, { responseType: 'text' });
  }
}
