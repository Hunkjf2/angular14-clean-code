import { 
  Directive, 
  OnDestroy, 
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, timer } from 'rxjs';

@Directive({
  selector: 'app-rxjs',
})
export class RxjsComponent implements OnDestroy {

  protected readonly destroy$ = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected navegarComDelay(router: Router, rota: any[], delay: number = 2000): void {
    timer(delay).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      router.navigate(rota);
    });
  }

}