import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { Formulario } from 'src/app/shared/model/formulario.model';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss'],
})
export class PessoaFormComponent {

  @Input() public formulario!: Formulario<Pessoa>;
  @Input() public titulo: string | undefined = '';
  @Output() public enviar: EventEmitter<void> = new EventEmitter<void>();


  getErrorMessage(fieldName: string): string {
    return this.getFieldErrorMessage(this.formulario.get(fieldName));
  }

  private getFieldErrorMessage(field: any): string {
    if (!field?.errors) return '';

    const errorMessages: { [key: string]: string } = {
      required: 'Este campo é obrigatório',
      email: 'Email inválido',
      cpfInvalido: 'CPF inválido',
      minlength: 'Nome deve ter pelo menos 2 caracteres',
      pattern: 'Formato inválido'
    };

    const firstErrorKey = Object.keys(field.errors)[0];
    return errorMessages[firstErrorKey] || 'Campo inválido';
  }

}