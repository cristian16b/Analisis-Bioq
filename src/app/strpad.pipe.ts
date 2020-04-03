import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strpad'
})
export class StrpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
