import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
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
export class PessoaListComponent implements OnInit, OnDestroy, AfterViewInit {
  public readonly colunas: string[] = ['nome', 'cpf', 'email', 'acoes'];
  protected dadosTabela = new MatTableDataSource<Pessoa>([]);
  protected opcoesTamanhoPagina: number[] = [5, 10, 20];
  
  // Controle do filtro
  public filtroControl = new FormControl('');
  private pessoasOriginais: Pessoa[] = [];

  @ViewChild(MatPaginator) protected paginacao!: MatPaginator;
  @ViewChild(MatSort) protected ordenacao!: MatSort;
  
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly pessoaService: PessoaService,
    private readonly router: Router
  ) {
    // Configurar filtro customizado para MatTableDataSource
    this.configurarFiltroCustomizado();
    this.configurarFiltroInput();
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  ngAfterViewInit(): void {
    this.dadosTabela.paginator = this.paginacao;
    this.dadosTabela.sort = this.ordenacao;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private configurarFiltroCustomizado(): void {
    // Configurar função de filtro customizada para o MatTableDataSource
    this.dadosTabela.filterPredicate = (pessoa: Pessoa, filtro: string): boolean => {
      if (!filtro.trim()) {
        return true;
      }

      const termoLower = filtro.toLowerCase().trim();
      
      // Buscar em nome, email e CPF
      const nome = pessoa.nome?.toLowerCase() || '';
      const email = pessoa.email?.toLowerCase() || '';
      const cpf = pessoa.cpf?.replace(/\D/g, '') || '';
      const filtroNumerico = filtro.replace(/\D/g, '');

      return nome.includes(termoLower) || 
             email.includes(termoLower) || 
             cpf.includes(filtroNumerico);
    };
  }

  private configurarFiltroInput(): void {
    this.filtroControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(termo => {
        this.aplicarFiltro(termo || '');
      });
  }

  private aplicarFiltro(termo: string): void {
    // Usar o sistema de filtro nativo do MatTableDataSource
    this.dadosTabela.filter = termo.trim();
    
    // Voltar para a primeira página após filtrar
    if (this.dadosTabela.paginator) {
      this.dadosTabela.paginator.firstPage();
    }
  }

  public limparFiltro(): void {
    this.filtroControl.setValue('');
    this.dadosTabela.filter = '';
  }

  private carregarPessoas(): void {
    this.pessoaService.listarTodos()
      .pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          console.error('Erro ao carregar pessoas:', error);
          return of([]);
        })
      )
      .subscribe({
        next: (pessoas: Pessoa[]) => {
          this.pessoasOriginais = pessoas;
          this.dadosTabela.data = pessoas;
        },
        error: (error) => {
          console.error('Erro ao carregar pessoas:', error);
        }
      });
  }

  excluirPessoa(pessoa: Pessoa): void {
    if (confirm(`Tem certeza que deseja excluir ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!.toString())
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.carregarPessoas();
            // Manter o filtro após recarregar
            const filtroAtual = this.filtroControl.value;
            if (filtroAtual) {
              setTimeout(() => {
                this.aplicarFiltro(filtroAtual);
              });
            }
          },
          error: (error) => {
            console.error('Erro ao excluir pessoa:', error);
          }
        });
    }
  }
}