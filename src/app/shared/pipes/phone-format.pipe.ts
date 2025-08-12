import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  pure: true
})
export class PhoneFormatPipe implements PipeTransform {
  private readonly MOBILE_LENGTH = 11;
  private readonly LANDLINE_LENGTH = 10;
  private readonly FORMATTED_PHONE_PATTERN = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

  transform(phone: string): string {
    if (!phone) {
      return '';
    }

    // Se já está formatado, retorna como está
    if (this.isAlreadyFormatted(phone)) {
      return phone;
    }

    // Remove caracteres não numéricos
    const numbersOnly = this.extractNumbers(phone);
    
    // Formata conforme o tipo de telefone
    if (numbersOnly.length === this.MOBILE_LENGTH) {
      return this.formatMobilePhone(numbersOnly);
    } else if (numbersOnly.length === this.LANDLINE_LENGTH) {
      return this.formatLandlinePhone(numbersOnly);
    }

    // Retorna o valor original se não for possível formatar
    return phone;
  }

  private isAlreadyFormatted(phone: string): boolean {
    return this.FORMATTED_PHONE_PATTERN.test(phone);
  }

  private extractNumbers(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  private formatMobilePhone(numbers: string): string {
    // (11) 99999-9999
    return `(${numbers.substr(0, 2)}) ${numbers.substr(2, 5)}-${numbers.substr(7, 4)}`;
  }

  private formatLandlinePhone(numbers: string): string {
    // (11) 9999-9999
    return `(${numbers.substr(0, 2)}) ${numbers.substr(2, 4)}-${numbers.substr(6, 4)}`;
  }
}