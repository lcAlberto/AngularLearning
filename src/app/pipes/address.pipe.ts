import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/address-interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = !address ||
      !address.street ||
      !address.number ||
      !address.city ||
      !address.state ||
      !address.city

    if (INVALID_ADDRESS)
      return 'Endereço inválido'
    else
      return `${address.street}, Nº ${address.number}, ${address.city} - ${address.state}, ${address.country}`;
  }

}
