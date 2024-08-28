import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean | undefined): unknown {
    if (status === undefined)
      return 'Indefinido'
    return status ? 'Ativo' : 'Inativo';
  }

}
