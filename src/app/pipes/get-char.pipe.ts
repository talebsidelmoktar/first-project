import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: unknown, position: unknown): unknown {
    if (typeof value === 'string' && typeof position === 'number') {
      ///return value.charAt(position);
      if (position < value.length)
        return value[position];
      else
        return value[0];
    }
   else return "";
  }
}
