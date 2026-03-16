import { Component } from '@angular/core';
import { LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { PipePersonalizadoPipe } from '../../../Pipes/pipe-personalizado-pipe';

@Component({
  selector: 'app-pipes',
  imports: [LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, PipePersonalizadoPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

  username: string = 'FACUNDO';

  numero: number = 123456789.12345;
  fecha = new Date(2025, 4, 5);
  plata = 1237.234;

}
