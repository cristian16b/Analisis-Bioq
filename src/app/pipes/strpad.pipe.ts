import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'strpad'
})
export class StrpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let salida = null;
    if(value !== null){
      let numero = value;
      let numeroString = '' + numero;
      salida = numeroString.padStart(environment.strPadCantidadCeros,'0');
    }
    return salida;
  }

}
