import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { FormularioPessoaService } from '../../services/fomrulario-pessoa.service';
import { Formulario } from 'src/app/shared/model/formulario.model';
import { takeUntil } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/Notification.service';
import { RxjsComponent } from 'src/app/shared/components/rxjs/rxjs.component';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent extends RxjsComponent {
 public formularioCadastro: Formulario<Pessoa> = this.formularioPessoaService.formulario(); 

  constructor(
    private formularioPessoaService: FormularioPessoaService,
    private readonly pessoaService: PessoaService,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) {
    super()
  }

  public cadastarPessoa(): void {
    this.formularioPessoaService.validarFormulario(this.formularioCadastro) && this.executarCadastro()
  }

  private executarCadastro(): void {
    delete this.formularioCadastro.value.id
    this.pessoaService.cadastrar(this.formularioCadastro.value)
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