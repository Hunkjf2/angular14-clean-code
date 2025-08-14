import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PessoaListarComponent } from './modules/pessoa/pages/pessoa-listar/pessoa-listar.component';
import { PessoaCadastroComponent } from './modules/pessoa/pages/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaEditarComponent } from './modules/pessoa/pages/pessoa-editar/pessoa-editar.component';
import { PessoaDetalharComponent } from './modules/pessoa/pages/pessoa-detalhar/pessoa-detalhar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoas', component: PessoaListarComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent },
  { path: 'pessoas/detalhar/:id', component: PessoaDetalharComponent },
  { path: 'pessoas/editar/:id', component: PessoaEditarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
