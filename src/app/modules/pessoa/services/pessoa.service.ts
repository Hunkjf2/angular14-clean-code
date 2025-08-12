import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { BaseService } from 'src/app/core/base/service/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseService<Pessoa> {
  
  public getUrl(): string {
        return `${environment.serverUrl}/pessoas`;
  }
}