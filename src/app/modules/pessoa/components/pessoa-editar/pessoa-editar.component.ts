import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { Pessoa } from '../../models/pessoa.model';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { carregarDados } from 'src/app/shared/utils/carregar-dados';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.scss']
})
export class PessoaEditarComponent implements OnInit {
  public formularioEditar: Formulario<Pessoa> = this.formularioPessoaService.formulario();
  private readonly pessoa: Pessoa = this.activatedRoute.snapshot.data['pessoa'];

  constructor(
    private readonly pessoaService: PessoaService,
    private formularioPessoaService: FormularioPessoaService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
 
  }

  public ngOnInit(): void {
    carregarDados(this.formularioEditar, this.pessoa)
  }

 
}