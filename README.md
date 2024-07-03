
# Moka Web

Bem-vindo ao repositório do Moka Web! Este é um aplicativo front-end ambicioso construído com a versão mais recente do Angular, NGRX para gerenciamento de estado, ~~e Chart.js~~ para visualização de dados. Este documento descreve as configurações de fluxo de trabalho, convenções gerais de codificação e diretrizes de contribuição de PR(pull request) para garantir um processo de desenvolvimento eficiente e colaborativo.

## Índice

- [Moka Web](#moka-web)
  - [Índice](#índice)
  - [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Estrutura geral do projeto](#estrutura-geral-do-projeto)
  - [Configurações de Fluxo de Trabalho (Workflow)](#configurações-de-fluxo-de-trabalho-workflow)
    - [VSCode](#vscode)
    - [Navegador Chrome ou baseados em chrome](#navegador-chrome-ou-baseados-em-chrome)
    - [Angular CLI](#angular-cli)
  - [Convenções Gerais de Código](#convenções-gerais-de-código)
    - [Guia de Estilização de código (Eslint + Prettier)](#guia-de-estilização-de-código-eslint--prettier)
    - [Tópicos específicos do Angular](#tópicos-específicos-do-angular)
    - [Gerenciamento de Estado (NGRX)](#gerenciamento-de-estado-ngrx)
    - [**Testes**](#testes)
  - [Regras gerais para uma boa contribuição de PR](#regras-gerais-para-uma-boa-contribuição-de-pr)

## Visão Geral do Projeto

Moka Web é projetado para proporcionar uma experiência de usuário perfeita e responsiva. Nosso objetivo é aproveitar as tecnologias modernas de front-end para criar uma base de código eficiente e de fácil manutenção. Em resumo, este projeto utiliza como principais bilbiotecas:

- **Angular**: Para construir aplicativos web dinâmicos e modulares.
- **NGRX**: Para gerenciar o estado da aplicação de forma escalável e previsível.
- **Chart.js**: Para integrar gráficos interativos e personalizáveis.(Não decidido ainda )
- **Angular Material**: Para componentes de interface de usuário de alta qualidade e estilizados, com opções de customização que escalam até em dispositivos móveis.
- **Font Awesome**: Para ícones escaláveis e personalizáveis.

## Estrutura geral do projeto
 ``` sql
mb_web_frontend/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interceptors/
│   │   │   ├── guards/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   │   ├── actions/
│	 │   │   │   ├── reducers/
│	 │   │   │   ├── effects/
│	 │   │   │   ├── selectors/
│	 │   │   │   ├── index.ts
│   │   │   ├── index.ts
│   │   ├── shared/
│   │   │   ├── ui/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   ├── utils/
│   │   │   ├── index.ts
│   │   ├── feature/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   ├── feature.routes.ts
│   │   │   ├── feature.component.html
│   │   │   ├── feature.component.scss
│   │   │   ├── feature.component.ts
│   │   │   ├── index.ts
│   │   ├── feature2/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   ├── feature2.routes.ts
│   │   │   ├── feature2.component.html
│   │   │   ├── feature2.component.scss
│   │   │   ├── feature2.component.ts
│   │   │   ├── index.ts
│   │   ├── app.routes.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
```

- **src/app/core/**: Possui serviços em padrão singleton (Injetados na root), interceptadores,  guardas e a 'store' (global store) que devem ser configurados uma vez e estar disponíveis para aplicação inteira.
    - **src/app/core/store/**: Contêm as principais configurações da store NGRX, incluindo ações, redutores, efeitos e seletores.
    
- **src/app/shared/**:  Contêm componentes ui  (componentes de apresentação), serviços compartilhados, diretivas e pipes que são utilizados em variadas funcionalidades, podendo ser importados por múltiplos componentes diferentes.
    
- **src/app/feature{x}/**: Contêm componentes, serviços, rotas, e 'stores' (component stores ou signal stores) específicos para uma funcionalidade, podendo conter pipes e diretivas específicos a aquele componente/funcionalidade. Cada funcionalidade deve ter seu próprio diretório, cada diretório pode ter vários componentes.
    
- **src/assets/**: Possui recursos estáticos como images e fontes que são utilizados pela aplicação
    
- **src/environments/**: Armazena configurações específica de ambientes.

## Configurações de Fluxo de Trabalho (Workflow)

Para garantir consistência e eficiência em contexto colaborativo, siga estas configurações básicas para o seu ambiente de desenvolvimento local:

### VSCode

1. **Extensões**:
   - [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials) para geração de código template de novas entidades Angular e Ngrx
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) para linting de TypeScript | Javascript
   - [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. **Configurações**:
   - Habilitar formatação ao salvar: `"editor.formatOnSave": true`
   - Definir Prettier como formatador padrão: `"editor.defaultFormatter": "esbenp.prettier-vscode"`

### Navegador Chrome ou baseados em chrome

1. **Extensões**:
   - [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh) para auxiliar a depuração e inspeção de aplicativos Angular.

2. **Configurações**:
   - Habilitar modo de desenvolvedor no Chrome: `chrome://extensions/`
   - Configurar depuração remota no Chrome através do [VSCode](https://code.visualstudio.com/docs/nodejs/browser-debugging).

### Angular CLI

1. **Instalação**:
   - Certifique-se de ter a versão mais recente do Angular CLI instalada: `npm install -g @angular/cli && ng --version`

2. **Comandos Comuns**:
   - `ng serve` - Executar a aplicação localmente.
   - `ng build` - Compilar a aplicação para produção.
   - `ng test` - Executar testes unitários automatizados.
   - `ng e2e` - Executar testes end-to-end automatizados.
   - `ng lint` - Executar verificações de linting.

## Convenções Gerais de Código

Seguir convenções de codificação garante a legibilidade e a manutenção do código. Por favor, tente seguir as diretrizes abaixo:

### Guia de Estilização de código (Eslint + Prettier)

- **Nomeação de Arquivos**: Use kebab-case para nomes de arquivos (ex.: `app.component.ts`).
- **Seletor de Componentes**: Use um prefixo único para seletores (ex.: `app-header`).
- **Indentação**: Use 2 espaços para indentação (padrão).
- **Comprimento da Linha**: Limite as linhas a 150 caracteres.

### Tópicos específicos do Angular

- **Módulos**: Organize recursos, de maneira coesa, em módulos do Angular apenas em c**asos necessários** (legado), utilize componentes e serviços *standalones* por padrão. 
- **Componentes**: Mantenha a lógica dos componentes simples e delegue tarefas complexas para serviços. Não crie soluções monoliticas usando poucos componentes, busque fatiar as soluções em componentes menores e mais fáceis de serem lidos, compreendidos e testados. Use soluções de gerencimanto de estado para compor soluções que necessitem de comunicação entre os componentes.
- **Serviços**: Use serviços para busca de dados, lógica de negócios e funcionalidades compartilhadas. Use o princípo de responsabilidade única para cada serviço desenvolvido, evite serviçoes compelxos com muitas responsabilidades envolvidas.
- **Rotas**: Use o roteamento do Angular para navegação entre páginas e componentes. Evite usar rotas para controle de estado, use gerenciadores de estado como NGRX para isso.
- **Diretivas**: Use diretivas para manipulação do DOM e comportamentos dinâmicos. Evite usar diretivas como componentes, use apenas quando necessário. 
- **Pipes**: Use pipes para transformação de dados e formatação. Evite usar pipes complexos com muitas responsabilidades, busque criar pipes simples e reutilizáveis.

### Gerenciamento de Estado (NGRX)

- **Ações**: Defina ações em um arquivo dedicado para cada recurso.
- **Redutores**: Mantenha as funções de redutores puras e diretas.
- **Seletores**: Use seletores para encapsular consultas de estado.
- **Imutabilidade**: Use o pacote `@ngrx/entity` para gerenciar entidades e manter a imutabilidade do estado.
- **Efeitos**: Use efeitos para lidar com operações assíncronas, como chamadas de API.
- **DevTools**: Use a extensão do Angular DevTools para depuração e monitoramento do estado da aplicação.

### **Testes**

- **Testes Unitários**: Escreva testes unitários para componentes, serviços e stores do NGRX.
- **Testes E2E**: Escreva testes end-to-end para cobrir jornadas compeltas e críticas do usuário.

## Regras gerais para uma boa contribuição de PR

Para manter um alto padrão de qualidade de código e garantir um processo de revisão rápido e eficiente, siga estas diretrizes de PR:

1. **Nomeação de Branch**:
   - Use nomes **de** branch descritivos (ex.: `feat-user-authentication`, `fix-login-error`), com os mesmos prefixos expostos exposto no documento de especificação [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), em resumo:
     - Use o prefixo `feat` para novas funcionalidades, `fix` para correções de bugs e `chore` para alterações que não afetam o código (ex.: atualização do README).
     -  Além disso podem ser usados os seguintes prefixos `build`, `ci`, `docs`, `style`, `refactor`, `perf`,  `test`, como explciados na documentação de [guidelines do Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).


2. **Mensagens de Commit**:
   - Escreva mensagens de commit claras e concisas. Use o modo imperativo (ex.: "Adicionar autenticação de usuário", "Corrigir erro de login"). Use o documento de especificação como referência [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

3. **Descrição do PR**:
   - Forneça uma descrição detalhada das alterações feitas, incluindo o propósito e qualquer contexto relevante.

4. **Revisão de Código**:
   - Atribua pelo menos um revisor ao PR.
   - Aborde todos os comentários e sugestões de revisão.
   - Certifique-se de que todos os testes passem antes de solicitar uma revisão.

5. **Documentação**:
   - Atualize a documentação relevante (ex.: README, comentários no código) para refletir as alterações.

6. **Linting e Formatação**:
   - Certifique-se de que o código passe todas as verificações de linting e formatação.

7. **Testes**:
   - Inclua testes unitários e/ou e2e para novos recursos e correções de bugs.
