import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PessoaListComponent } from './modules/pessoa/components/pessoa-list/pessoa-list.component';
import { PessoaCadastroComponent } from './modules/pessoa/components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaEditarComponent } from './modules/pessoa/components/pessoa-editar/pessoa-editar.component';
import { PessoaDetailComponent } from './modules/pessoa/components/pessoa-detail/pessoa-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent },
  { path: 'pessoas/detalhar/:id', component: PessoaDetailComponent },
  { path: 'pessoas/editar/:id', component: PessoaEditarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
