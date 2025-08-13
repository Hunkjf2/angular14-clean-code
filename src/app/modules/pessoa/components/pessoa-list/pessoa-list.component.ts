import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntPtBr } from 'src/app/core/paginator/mat-paginator-ptBr';
import { FiltroComponent } from 'src/app/shared/components/filtro/filtro.component';
import { NotificationService } from 'src/app/shared/services/Notification.service';
import { MensagemSistema } from 'src/app/shared/enum/mensagem-sistema.enum';
import { filter, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntPtBr },
  ],
})
export class PessoaListComponent extends FiltroComponent implements OnInit, AfterViewInit {

  public readonly colunas: string[] = ['nome', 'cpf', 'email', 'acoes'];
  
  constructor(
    private readonly pessoaService: PessoaService,
    private readonly notificationService: NotificationService
  ) {
    super()
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  private carregarPessoas(): void {
    this.pessoaService.listarTodos()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (pessoas: Pessoa[]) => {
          this.dadosTabela.data = pessoas;
        },
        error: (_) => {
          this.notificationService.erro(
            'Erro ao carregar',
            MensagemSistema.ERRO
          );
        }
      });
  }

  public excluirPessoa(pessoa: Pessoa): void {
    this.notificationService.confirmarExclusao(
      'Excluir Pessoa',
      MensagemSistema.CONFIRMACAO_EXCLUSAO
    ).pipe(
      filter(confirmado => confirmado && !!pessoa.id),
      switchMap(() => {
        return this.pessoaService.remover(pessoa.id!.toString());
      }),
      takeUntil(this.destroy$) 
    ).subscribe({
      next: (_) => {
        this.notificationService.toastSucesso(MensagemSistema.SUCESSO);
        this.carregarPessoas();
      },
      error: (_) => {
        this.notificationService.erro(
          'Erro ao excluir',
          MensagemSistema.ERRO
        );
      }
    });
  }

}