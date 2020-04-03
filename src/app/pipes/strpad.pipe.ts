import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strpad'
})
export class StrpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let salida = null;
    if(value !== null){
      let numero = value;
      let numeroString = '' + numero;
      salida = numeroString.padStart(3,'0');
    }
    return salida;
  }

}
