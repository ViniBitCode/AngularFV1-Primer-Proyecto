import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimerServicio {
  
  // Ejemplo para traer autos al frontend
  autos = ['auto1', 'auto2', 'auto3'];

  getAutos():string[] {
    return this.autos;
  }

  getAuto(id: number): string {
    return this.autos[id];
  }

}
