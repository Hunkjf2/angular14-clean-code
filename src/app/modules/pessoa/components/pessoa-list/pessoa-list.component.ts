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
import { FiltroComponent } from 'src/app/shared/components/filtro/filtro.component';

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
    private readonly router: Router
  ) {
    super()
  }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  private carregarPessoas(): void {
        this.pessoaService.listarTodos().subscribe({
            next: (pessoas: Pessoa[]) => this.dadosTabela.data = pessoas,
            error: (_) => {
              
            }
        });
  }
}