import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat',
  pure: true
})
export class CpfFormatPipe implements PipeTransform {
  private readonly CPF_LENGTH = 11;
  private readonly FORMATTED_CPF_PATTERN = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  transform(cpf: string): string {
    if (!cpf) {
      return '';
    }

    // Se já está formatado, retorna como está
    if (this.isAlreadyFormatted(cpf)) {
      return cpf;
    }

    // Remove caracteres não numéricos
    const numbersOnly = this.extractNumbers(cpf);
    
    // Formata apenas se tiver 11 dígitos
    if (numbersOnly.length === this.CPF_LENGTH) {
      return this.formatCpfString(numbersOnly);
    }

    // Retorna o valor original se não for possível formatar
    return cpf;
  }

  private isAlreadyFormatted(cpf: string): boolean {
    return this.FORMATTED_CPF_PATTERN.test(cpf);
  }

  private extractNumbers(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  private formatCpfString(numbers: string): string {
    return `${numbers.substr(0, 3)}.${numbers.substr(3, 3)}.${numbers.substr(6, 3)}-${numbers.substr(9, 2)}`;
  }
}