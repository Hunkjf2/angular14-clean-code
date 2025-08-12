import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaDetailComponent } from './components/pessoa-detail/pessoa-detail.component';
import { PessoaCadastroComponent } from './components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaEditarComponent } from './components/pessoa-editar/pessoa-editar.component';
import { PessoaService } from './services/pessoa.service';
import { FormularioPessoaService } from './services/fomrulario-pessoa.service';

@NgModule({
  declarations: [
    PessoaListComponent,
    PessoaFormComponent,
    PessoaDetailComponent,
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
    PessoaListComponent,
    PessoaFormComponent,
    PessoaDetailComponent,
    PessoaCadastroComponent,
    PessoaEditarComponent
  ]
})
export class PessoaModule { }