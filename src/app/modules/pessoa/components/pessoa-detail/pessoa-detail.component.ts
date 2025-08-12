import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { carregarDados } from 'src/app/shared/utils/carregar-dados';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent implements OnInit {

  public formularioDetalhar: Formulario<Pessoa> = this.formularioPessoaService.formulario();
  private readonly pessoa: Pessoa = this.activatedRoute.snapshot.data['pessoa'];

  constructor(
    private formularioPessoaService: FormularioPessoaService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    carregarDados(this.formularioDetalhar, this.pessoa)
  }

}