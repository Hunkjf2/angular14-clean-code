# Sistema de Gerenciamento de Pessoas - Frontend

Um sistema completo de CRUD para gerenciamento de pessoas desenvolvido em Angular 14 com interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **Angular** - Framework principal
- **TypeScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS para estilização
- **Angular Material** - Componentes UI (tabelas, paginação, etc.)
- **RxJS** - Programação reativa
- **SweetAlert2** - Notificações e modais
- **ngx-mask** - Máscaras para formulários
- **@brazilian-utils/brazilian-utils** - Validação de CPF

## ✨ Funcionalidades

### 🏠 Página Inicial
- Dashboard com visão geral do sistema
- Navegação rápida para as principais funcionalidades
- Interface moderna com cards interativos

### 👥 Gestão de Pessoas
- **Listar Pessoas**: Visualização em tabela com paginação e ordenação
- **Cadastrar Pessoa**: Formulário completo com validações
- **Editar Pessoa**: Atualização de dados existentes
- **Detalhar Pessoa**: Visualização completa dos dados
- **Excluir Pessoa**: Remoção com confirmação

### 🔍 Recursos Avançados
- **Filtro em tempo real**: Busca por nome, email ou CPF
- **Validação de CPF**: Utilizando bibliotecas brasileiras especializadas
- **Máscaras automáticas**: Formatação de CPF durante digitação
- **Notificações**: Sistema completo de feedback ao usuário
- **Interface responsiva**: Funciona perfeitamente em dispositivos móveis

## 🏗️ Arquitetura do Projeto

```
src/
├── app/
│   ├── components/           # Componentes globais
│   │   └── home/            # Página inicial
│   ├── core/                # Funcionalidades principais
│   │   ├── base/            # Serviços base
│   │   └── paginator/       # Configuração do paginador
│   ├── modules/             # Módulos funcionais
│   │   └── pessoa/          # Módulo de pessoas
│   │       ├── models/      # Interfaces e modelos
│   │       ├── pages/       # Páginas do módulo
│   │       └── services/    # Serviços específicos
│   └── shared/              # Recursos compartilhados
│       ├── components/      # Componentes reutilizáveis
│       ├── pipes/           # Pipes customizados
│       ├── services/        # Serviços globais
│       └── validators/      # Validadores customizados
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn
- Angular CLI

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd sistema-pessoas-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**
```bash
# Para desenvolvimento
cp src/environments/environment.ts src/environments/environment.local.ts

# Para produção
cp src/environments/environment.prod.ts src/environments/environment.production.ts
```

4. **Configure a URL do backend**
Edite o arquivo `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  serverUrl: 'http://localhost:3000', // URL do seu backend
  // ... outras configurações
};
```

5. **Execute o projeto**
```bash
npm start
# ou
ng serve
```

O sistema estará disponível em `http://localhost:4200`

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia o servidor de desenvolvimento
npm run build            # Build para produção
npm run build:dev        # Build para desenvolvimento
npm test                 # Executa os testes unitários
npm run lint             # Verifica padrões de código
npm run e2e              # Testes end-to-end
```

## 🎨 Padrões de Design

### Componentização
- Componentes reutilizáveis no módulo `shared`
- Separação clara entre componentes de apresentação e lógica
- Uso de `@Input()` e `@Output()` para comunicação entre componentes

### Gerenciamento de Estado
- Formulários reativos com validação em tempo real
- Serviços para comunicação com APIs
- Padrão Observable para operações assíncronas

### Estilização
- Tailwind CSS para estilização responsiva
- Classes utilitárias para desenvolvimento rápido
- Componentes Material para elementos complexos

## 📱 Responsividade

O sistema foi desenvolvido com **mobile-first** approach:
- Layout adaptável para smartphones, tablets e desktops
- Navegação otimizada para touch
- Tabelas com scroll horizontal em dispositivos móveis
- Formulários adaptados para diferentes tamanhos de tela

## 🔐 Validações

### Formulários
- **Nome**: Obrigatório, mínimo 2 caracteres
- **CPF**: Obrigatório, validação completa de CPF brasileiro
- **Email**: Obrigatório, formato de email válido
- **Data de Nascimento**: Obrigatória

### Feedback Visual
- Campos com erro destacados em vermelho
- Mensagens de erro específicas para cada validação
- Indicadores visuais de campos válidos

## 🚦 Fluxo de Navegação

```
Home
├── Listar Pessoas (/pessoas)
│   ├── Nova Pessoa (/pessoas/novo)
│   ├── Detalhar Pessoa (/pessoas/detalhar/:id)
│   └── Editar Pessoa (/pessoas/editar/:id)
└── Nova Pessoa (acesso direto)
```

## 📊 Funcionalidades da Tabela

- **Paginação**: 5, 10 ou 20 itens por página
- **Ordenação**: Por qualquer coluna (nome, CPF, email)
- **Filtro**: Busca em tempo real em todos os campos
- **Ações**: Detalhar, Editar e Excluir para cada registro

## 🎯 Boas Práticas Implementadas

### Código
- **TypeScript** para tipagem estática
- **Interfaces** para definição de contratos
- **Serviços** para lógica de negócio
- **Componentes** pequenos e focados
- **Lazy Loading** para otimização

### UX/UI
- **Loading states** durante operações
- **Confirmações** para ações destrutivas
- **Feedback visual** imediato
- **Acessibilidade** com labels e aria-labels

### Performance
- **OnPush** change detection strategy onde aplicável
- **TrackBy** functions em listas
- **Pipe** puros para transformações
- **Subscription** management com `takeUntil`

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes com coverage
npm run test:coverage

# Testes em modo watch
npm run test:watch
```

## 🚀 Deploy

### Build para Produção
```bash
npm run build:prod
```

### Configuração de Ambiente
Certifique-se de configurar corretamente:
- URL do backend em `environment.prod.ts`
- Configurações de CORS no servidor
- Certificados SSL se necessário

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).


