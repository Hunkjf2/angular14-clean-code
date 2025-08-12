import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { Formulario } from 'src/app/shared/model/formulario.model';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent {
 public formularioCadastro: Formulario<Pessoa> = this.formularioPessoaService.formulario(); 

  constructor(
    private formularioPessoaService: FormularioPessoaService,
    private readonly pessoaService: PessoaService,
    private readonly router: Router
  ) {}


  public cadastarPessoa(): void {
    this.formularioPessoaService.validarFormulario(this.formularioCadastro) && this.executarCadastro()
  }

  private executarCadastro(): void {
    this.pessoaService.cadastrar(this.formularioCadastro.value).subscribe({
      next: (_) => {

      },
      error: (_) => {

      },
    });
  }

  
}