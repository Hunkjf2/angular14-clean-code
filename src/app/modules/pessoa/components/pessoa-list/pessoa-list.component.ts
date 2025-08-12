import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntPtBr } from 'src/app/core/paginator/mat-paginator-ptBr';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntPtBr },
  ],
})
export class PessoaListComponent implements OnInit, OnDestroy {
  public readonly colunas: string[] = ['nome', 'cpf', 'email', 'acoes'];
  protected dadosTabela = new MatTableDataSource<any>([]);
  protected opcoesTamanhoPagina: number[] = [5, 10, 20];
  @ViewChild(MatPaginator) protected paginacao!: MatPaginator;
  @ViewChild(MatSort) protected ordenacao!: MatSort;
  public colunas$!: Observable<Pessoa[]>;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly pessoaService: PessoaService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private carregarPessoas(): void {
    this.pessoaService.listarTodos().subscribe({
      next: (pessoas: Pessoa[]) => this.dadosTabela.data = pessoas,
      error: (_) => {

      }
    });
  }


  excluirPessoa(pessoa: Pessoa): void {
    
  }



}