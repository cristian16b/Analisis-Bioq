import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strpad'
})
export class StrpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let salida = null;
    if(salida !== null){
      let numero = args;
      let numeroString = '' + numero;
      salida = numeroString.padStart(5,'0')
    }
    return salida;
  }

}
