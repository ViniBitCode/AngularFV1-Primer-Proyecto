import { Component, inject } from '@angular/core';
import { PrimerServicio } from '../../services/primer-service';

@Component({
  selector: 'app-primer-service',
  imports: [],
  templateUrl: './primer-service.html',
  styleUrl: './primer-service.scss',
})
export class PrimerService {

  primer_servicio = inject(PrimerServicio);
  display = this.primer_servicio.getAutos().join(' 🚗 ');

}
