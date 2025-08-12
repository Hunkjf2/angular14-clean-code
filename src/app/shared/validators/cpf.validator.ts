import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    
    const isValid = isValidCPF(control.value);
    return isValid ? null : { cpfInvalido: true };
  };
}