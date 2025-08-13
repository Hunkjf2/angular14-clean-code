import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { PessoaService } from '../../services/pessoa.service';
import { UnsubscribeComponent } from 'src/app/shared/components/unsubscribe/unsubscribe.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent extends UnsubscribeComponent implements OnInit {

  public formularioDetalhar: Formulario<Pessoa> = this.formularioPessoaService.formulario();
  private readonly pessoaId: string = this.activatedRoute.snapshot.params['id'];

  constructor(
    private formularioPessoaService: FormularioPessoaService,
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.desativarFormulario();
    this.carregarDados();
  } 

  private carregarDados(): void {
    this.pessoaService.obterPorId(this.pessoaId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
      next: (pessoa: Pessoa) => {
        this.formularioDetalhar.patchValue(pessoa);
      },
      error: (_) => {
      }
    });
  }

  private desativarFormulario(): void {
    this.formularioDetalhar.disable();
  }

}