import { TestBed } from '@angular/core/testing';
import { PessoaService } from './pessoa.service';

describe('PessoaService', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pessoas list', (done) => {
    service.getPessoas().subscribe(pessoas => {
      expect(pessoas).toBeInstanceOf(Array);
      expect(pessoas.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should create a new person', (done) => {
    const novaPessoaData = {
      nome: 'Teste Silva',
      cpf: '123.456.789-00',
      email: 'teste@email.com',
      telefone: '(11) 99999-9999',
      dataNascimento: '1990-01-01',
      endereco: {
        logradouro: 'Rua Teste',
        numero: '123',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01234-567'
      }
    };

    service.criarPessoa(novaPessoaData).subscribe(pessoa => {
      expect(pessoa.nome).toBe('Teste Silva');
      expect(pessoa.id).toBeDefined();
      done();
    });
  });
});