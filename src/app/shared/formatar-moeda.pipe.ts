import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarMoeda'
})
export class FormatarMoedaPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'number') {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    }
    return value;
  }

}
