import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { Pessoa } from '../../models/pessoa.model';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { UnsubscribeComponent } from 'src/app/shared/components/unsubscribe/unsubscribe.component';
import { takeUntil } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/Notification.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.scss']
})
export class PessoaEditarComponent extends UnsubscribeComponent implements OnInit {
  public formularioEditar: Formulario<Pessoa> = this.formularioPessoaService.formulario();
  private readonly pessoaId: string = this.activatedRoute.snapshot.params['id'];

  constructor(
    private readonly pessoaService: PessoaService,
    private formularioPessoaService: FormularioPessoaService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.carregarDados();
  }

  private carregarDados(): void {
      this.pessoaService.obterPorId(this.pessoaId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
        next: (pessoa: Pessoa) => {
          this.formularioEditar.patchValue(pessoa);
        },
        error: (_) => {
        }
      });
  }

  public atualizarPessoa(): void {
    this.formularioPessoaService.validarFormulario(this.formularioEditar) && this.executarAtualizacao();
  }

  private executarAtualizacao(): void {
    this.pessoaService.atualizar(this.formularioEditar.value)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (_) => {
        this.notificationService.toastSucesso();
        this.navegarComDelay(this.router, ['/pessoas'], 2000);
      },
      error: (_) => this.notificationService.toastErro()
    });
  }
 
}