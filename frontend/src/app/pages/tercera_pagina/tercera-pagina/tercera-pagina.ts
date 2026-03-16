import { Component } from '@angular/core';
import { PrimerService } from '../../../components/primer-service/primer-service';
import { Pipes } from '../../../components/pipes/pipes';

@Component({
  selector: 'app-tercera-pagina',
  imports: [PrimerService, Pipes],
  templateUrl: './tercera-pagina.html',
  styleUrl: './tercera-pagina.scss',
})

export class TerceraPagina {

}
