import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../models/pessoa.model';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { cpfValidator } from 'src/app/shared/validators/cpf.validator';

@Injectable({ 
  providedIn: 'root' 
})
export class FormularioPessoaService {

  constructor(private fb: FormBuilder) {}

  public formulario(): Formulario<Pessoa> {
    return this.fb.group({
      id: [null as number | null],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, cpfValidator()]],
      dataNascimento: [null as Date | null, [Validators.required]]
    }) as Formulario<Pessoa>;
  }

  public validarFormulario(formulario: Formulario<Pessoa>): boolean {
    return formulario.invalid ? (formulario.markAllAsTouched(), false) : true;
  }

}