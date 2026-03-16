import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado',
})
export class PipePersonalizadoPipe implements PipeTransform {

  palabra_reves: string = '';
  transform(value: string): string {

    for (let i = value.length - 1; i >= 0; i--) {
      this.palabra_reves += value[i];
    }

    return this.palabra_reves;

  }
}
