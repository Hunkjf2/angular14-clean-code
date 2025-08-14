import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaCadastroComponent } from './pages/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaEditarComponent } from './pages/pessoa-editar/pessoa-editar.component';
import { PessoaService } from './services/pessoa.service';
import { FormularioPessoaService } from './services/fomrulario-pessoa.service';
import { PessoaListarComponent } from './pages/pessoa-listar/pessoa-listar.component';
import { PessoaDetalharComponent } from './pages/pessoa-detalhar/pessoa-detalhar.component';

@NgModule({
  declarations: [
    PessoaListarComponent,
    PessoaFormComponent,
    PessoaDetalharComponent,
    PessoaCadastroComponent,
    PessoaEditarComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    FormularioPessoaService,
    PessoaService,
  ],
  exports: [
    PessoaListarComponent,
    PessoaFormComponent,
    PessoaDetalharComponent,
    PessoaCadastroComponent,
    PessoaEditarComponent
  ]
})
export class PessoaModule { }