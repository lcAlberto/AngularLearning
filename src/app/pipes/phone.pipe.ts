import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 13 || phone.length > 14
    if (INVALID_PHONE)
      return 'Telefone inválido';
    if (phone.length === 14 && phone.startsWith('+'))
      return `${phone.substring(0, 3)} (${phone.substring(3,5)}) ${phone.substring(5, 10)} - ${phone.substring(10,14)}`;
    else
      return `+${phone.substring(0, 2)} (${phone.substring(2, 4)}) ${phone.substring(4,9)} - ${phone.substring(9, 14)}`;
    }
}
