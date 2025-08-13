import { 
  AfterViewInit,
  Component, 
  EventEmitter, 
  OnDestroy, 
  Output, 
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filtro',
  templateUrl: 'filtro.component.html',
})
export class FiltroComponent implements AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) protected paginacao!: MatPaginator;
  @ViewChild(MatSort) protected ordenacao!: MatSort;
  @Output() protected filtroAlterado = new EventEmitter<string>();
  protected opcoesTamanhoPagina: number[] = [5, 10, 20];
  protected dadosTabela = new MatTableDataSource<any>([]);
  protected readonly destroy$ = new Subject<void>();

  public ngAfterViewInit(): void {
    this.paginacaoOrdenacao();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private paginacaoOrdenacao(): void {
    this.dadosTabela.paginator = this.paginacao;
    this.dadosTabela.sort = this.ordenacao;
  }

  public filtro(event: Event): void {
    this.filtroAlterado.emit((event.target as HTMLInputElement).value.trim().toLowerCase());
    this.paginacao?.firstPage();
  }

}