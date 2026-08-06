# Aprendizado de Programação - Baseado no curso Técnico de Desenvolvimento de Sistemas 

## Pré-requisitos

- **Node.js** (versão 14 ou superior) instalado
- **npm** (Node Package Manager) - geralmente instalado junto com Node.js
- **Git** para clonar o repositório
- Editor de código (VS Code, Sublime Text, ou outro de preferência)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/T4vinh0h/Aprendizado_Dev.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Aprendizado_Dev
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. (Opcional) Para executar arquivos TypeScript da pasta P.O.O, instale ts-node:
   ```bash
   npm install -g ts-node typescript
   ```

5. Verifique a instalação:
   ```bash
   node --version
   npm --version
   ts-node --version  # se instalou o ts-node
   ```

## Executáveis

Para executar qualquer exercício JavaScript, use o Node.js:

```bash
node caminho/para/o/arquivo.js
```

Exemplos:
```bash
node SENAC/Logica\ Prog/exemplo.js
node SENAC/P.O.O/classe_exemplo.js
```

Para executar arquivos TypeScript (pasta P.O.O), use o ts-node:

```bash
# Instalar ts-node globalmente (se não tiver)
npm install -g ts-node

# Executar arquivo TypeScript
ts-node caminho/para/arquivo.ts
```

Exemplos:
```bash
ts-node SENAC/P.O.O/b05-08-26/Otavio_Lista01_JS.ts
ts-node SENAC/P.O.O/b06-08-26/Otavio_Lista2.ts
ts-node SENAC/P.O.O/31-07-26/UML-D.C.ts
```

Para executar scripts MySQL, utilize um cliente MySQL como:
- **MySQL Workbench** (interface gráfica)
- **mysql** command-line client:
  ```bash
  mysql -u usuario -p nome_banco < arquivo.sql
  ```
- **DBeaver** (interface gráfica multi-banco)

## Estrutura do Projeto

```
Logica_Prog.-Node.js/
├── SENAC/
│   ├── Logica Prog/      # Exercícios de lógica de programação
│   ├── MySQL/            # Exercícios relacionados a MySQL
│   ├── P.O.O/            # Programação Orientada a Objetos
│   │   ├── 27-07-26/     # Atividade teórica sobre POO e UML
│   │   ├── 31-07-26/     # Diagrama de Classes e implementação
│   │   ├── b04-08-26/    # Exemplo básico de classe
│   │   ├── b05-08-26/    # Lista de exercícios 01
│   │   └── b06-08-26/    # Lista de exercícios 02
│   └── UGC_23-06-26/     # Material específico
├── node_modules/         # Dependências instaladas
├── package.json          # Configuração do projeto
├── package-lock.json     # Lock das dependências
├── LICENSE               # Licença do projeto
└── README.md             # Documentação
```

## Dependências

- **prompt-sync**: Biblioteca para leitura de entrada de dados via console de forma síncrona.
- **typescript**: Linguagem TypeScript para tipagem estática (usado na pasta P.O.O).
- **ts-node**: Execução direta de arquivos TypeScript sem compilação prévia.

---

## Lógica de Programação

### Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 40+ arquivos):**
- **Variáveis e constantes (`let`, `const`, `var`)**: armazenam valores de entrada, resultados de cálculos, contadores e estados. **- 340 arquivos**
- **Operadores aritméticos (+, -, *, /)**: usados em somas, subtrações, multiplicações, divisões, médias e conversões. **- 365 arquivos**
- **console.log**: exibe resultados, mensagens e orientações ao usuário. **- 338 arquivos**
- **Template strings (`${}`)**: formatam saídas dinâmicas com variáveis dentro de texto. **- 157 arquivos**
- **Comentários**: explicam a lógica por etapas e organizam exercícios. **- 340 arquivos**
- **Entrada de dados com prompt-sync**: lê valores do usuário em exercícios interativos. **- 176 arquivos**
- **Conversão de tipos (Number(), parseFloat(), parseInt())**: transforma texto em número para operações matemáticas. **- 99 arquivos**

**Conceitos Intermediários (presentes em 20-40 arquivos):**
- **Condicionais (if, else, else if)**: tomam decisões como aprovação/reprovação e validações de opções. **- 150 arquivos**
- **Operadores de comparação (>, <, >=, <=, ==, ===, !=)**: verificam intervalos, igualdade e combinações de condições. **- 229 arquivos**
- **Operadores lógicos (&&, ||, !)**: combinam múltiplas condições em expressões complexas. **- 115 arquivos**
- **Valores booleanos (true, false)**: controlam fluxos de validação e flags de estado. **- 33 arquivos**
- **Strings e manipulação básica**: tratam nomes, respostas, buscas e formatação de texto. **- 35 arquivos**
- **Validações de entrada**: checam números válidos, faixas esperadas e respostas corretas. **- 98 arquivos**

**Conceitos Avançados (presentes em 5-15 arquivos):**
- **Loops (while, for)**: repetem cálculos, percorrem listas e repetem tarefas até condição ser satisfeita. **- 125 arquivos**
- **Switch case**: escolhem ações com base em opções digitadas pelo usuário. **- 17 arquivos**
- **Arrays**: armazenam coleções como notas, itens e listas de valores. **- 99 arquivos**
- **Métodos de arrays (push)**: adicionam elementos em listas dinâmicas. **- 24 arquivos**
- **Funções declaradas**: encapsulam cálculos e lógica reutilizável. **- 75 arquivos**
- **Estruturas aninhadas**: combinam loops e condicionais para resolver problemas mais complexos. **- 88 arquivos**
- **Break e continue**: controlam o fluxo dentro de repetições. **- 26 arquivos**
- **Cálculos matemáticos complexos**: incluem raízes, arredondamentos e potências. **- 38 arquivos**
- **toFixed() para formatação**: formata números com casas decimais. **- 21 arquivos**
- **toLowerCase(), toUpperCase(), trim()**: normalizam entrada de texto. **- 8 arquivos**
- **typeof**: verifica tipos de dados em validações. **- 5 arquivos**

### Conceitos e Exemplos de Uso

Os arquivos deste repositório exploram conceitos de lógica de programação aplicados em situações práticas, como cálculos, validações e manipulação de dados.

- **Variáveis e constantes (`let`, `const`, `var`)**: armazenam valores de entrada, resultados de cálculos, contadores e estados.
- **Operadores aritméticos (`+`, `-`, `*`, `/`)**: usados em somas, subtrações, multiplicações, divisões, médias e conversões.
- **`console.log`**: exibe resultados, mensagens e orientações ao usuário.
- **Template strings (`${}`)**: formatam saídas dinâmicas com variáveis dentro de texto.
- **Comentários**: explicam a lógica por etapas e organizam exercícios.
- **Entrada de dados com `prompt-sync`**: lê valores do usuário em exercícios interativos.
- **Conversão de tipos (`Number()`, `parseFloat()`, `parseInt()`)**: transforma texto em número para operações matemáticas.
- **Condicionais (`if`, `else`, `else if`)**: tomam decisões como aprovação/reprovação e validações de opções.
- **Operadores de comparação e lógicos**: verificam intervalos, igualdade e combinações de condições.
- **Valores booleanos (`true`, `false`)**: controlam fluxos de validação e flags de estado.
- **Strings e manipulação básica**: tratam nomes, respostas, buscas e formatação de texto.
- **Validações de entrada**: checam números válidos, faixas esperadas e respostas corretas.
- **Loops (`for`, `while`)**: repetem cálculos, percorrem listas e repetem tarefas até condição ser satisfeita.
- **`switch/case`**: escolhem ações com base em opções digitadas pelo usuário.
- **Arrays**: armazenam coleções como notas, itens e listas de valores.
- **Métodos de arrays (`push`)**: adicionam elementos em listas dinâmicas.
- **Funções declaradas**: encapsulam cálculos e lógica reutilizável.
- **Estruturas aninhadas**: combinam loops e condicionais para resolver problemas mais complexos.
- **`break` e `continue`**: controlam o fluxo dentro de repetições.
- **Cálculos matemáticos complexos e `Math`**: incluem raízes, arredondamentos e potências.
- **`toFixed()`**: formata números com casas decimais.
- **`toLowerCase()`, `toUpperCase()`, `trim()`**: normalizam entrada de texto.
- **`typeof`**: verifica tipos de dados em validações.

Situações comuns encontradas nos exercícios:
- cálculo de médias escolares e avaliação de notas
- menus de opções e escolha de operações
- validação de idade, senha, opção ou entrada numérica
- manipulação de listas de produtos, nomes e valores
- conversão de unidades e cálculos financeiros
- repetição para somar, contar, buscar e repetir tarefas

---

## MySQL

### Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 8+ arquivos):**
- **CREATE DATABASE**: cria novos bancos de dados para organizar sistemas completos. **- 8 arquivos**
- **CREATE TABLE**: define estrutura de tabelas com campos, tipos e restrições. **- 8 arquivos**
- **Tipos de dados (INT, VARCHAR, DECIMAL, DATE, DATETIME, YEAR, ENUM, BOOLEAN, TEXT)**: define o tipo de informação que cada coluna armazena. **- 8 arquivos**
- **PRIMARY KEY (PK)**: identifica unicamente cada registro da tabela, geralmente com AUTO_INCREMENT. **- 8 arquivos**
- **FOREIGN KEY (FK)**: cria relacionamentos entre tabelas, garantindo integridade referencial. **- 8 arquivos**
- **AUTO_INCREMENT**: gera valores automáticos incrementais para chaves primárias. **- 8 arquivos**
- **NOT NULL**: torna campos obrigatórios, impedindo valores vazios. **- 8 arquivos**
- **UNIQUE**: garante que valores em uma coluna não se repitam. **- 6 arquivos**
- **DEFAULT**: define um valor padrão quando nenhum valor é informado. **- 6 arquivos**

**Conceitos Intermediários (presentes em 4-7 arquivos):**
- **INSERT**: adiciona novos registros nas tabelas, um ou múltiplos de uma vez. **- 7 arquivos**
- **UPDATE**: modifica registros existentes com base em condições. **- 7 arquivos**
- **DELETE**: remove registros de tabelas conforme filtros especificados. **- 7 arquivos**
- **SELECT**: consulta e recupera dados das tabelas. **- 8 arquivos**
- **WHERE**: filtra resultados baseado em condições específicas. **- 8 arquivos**
- **ORDER BY**: ordena resultados por colunas em ordem crescente (ASC) ou decrescente (DESC). **- 7 arquivos**
- **LIMIT**: limita a quantidade de registros retornados em uma consulta. **- 6 arquivos**
- **DISTINCT**: remove valores duplicados dos resultados. **- 5 arquivos**
- **INNER JOIN**: combina registros de tabelas relacionadas onde há correspondência. **- 5 arquivos**
- **LEFT JOIN**: retorna todos os registros da tabela esquerda e correspondências da direita. **- 5 arquivos**
- **ALTER TABLE**: modifica estrutura de tabelas (adicionar/remover colunas, alterar tipos). **- 6 arquivos**
- **DROP TABLE**: exclui tabelas inteiras do banco de dados. **- 6 arquivos**
- **TRUNCATE TABLE**: remove todos os registros mantendo a estrutura, resetando auto_increment. **- 5 arquivos**
- **ON DELETE CASCADE**: exclui registros relacionados automaticamente quando o registro pai é deletado. **- 4 arquivos**
- **ON DELETE SET NULL**: define como NULL as chaves estrangeiras quando o registro pai é deletado. **- 4 arquivos**
- **ON UPDATE CASCADE**: atualiza automaticamente chaves estrangeiras quando a chave primária é alterada. **- 4 arquivos**

**Conceitos Avançados (presentes em 1-3 arquivos):**
- **GROUP BY**: agrupa resultados por uma ou mais colunas para análise. **- 3 arquivos**
- **Funções de agregação (COUNT, SUM, AVG, MAX, MIN)**: COUNT conta registros, SUM soma valores, AVG calcula média, MAX retorna maior valor, MIN retorna menor valor. **- 3 arquivos**
- **BETWEEN**: filtra valores dentro de um intervalo específico. **- 5 arquivos**
- **IN**: filtra valores que correspondem a uma lista de opções. **- 5 arquivos**
- **LIKE**: busca padrões de texto usando curingas (%). **- 3 arquivos**
- **CHECK**: valida se valores atendem a uma condição específica. **- 2 arquivos**
- **INDEX**: cria índices para acelerar consultas em colunas frequentemente pesquisadas. **- 2 arquivos**
- **Relacionamentos 1:N e N:N**: um registro de uma tabela se relaciona com muitos de outra (1:N) ou muitos com muitos (N:N). **- 8 arquivos**
- **Normalização (1FN, 2FN, 3FN)**: elimina redundâncias e dependências anômalas. **- 2 arquivos**
- **Dependências funcionais**: relação onde um atributo depende de outro para determinar seu valor. **- 2 arquivos**
- **Modelo conceitual, lógico e físico**: representação abstrata, organização em tabelas e implementação real em SGBD. **- 3 arquivos**

### Conceitos e Exemplos de Uso

Os arquivos desta pasta exploram conceitos de banco de dados MySQL aplicados em sistemas práticos como bibliotecas, escolas, pet shops e sistemas criminais.

- **CREATE DATABASE**: cria novos bancos de dados para organizar sistemas completos.
- **CREATE TABLE**: define estrutura de tabelas com campos, tipos e restrições.
- **Tipos de dados**: `INT` para inteiros, `VARCHAR(n)` para texto, `DECIMAL(m,n)` para valores monetários, `DATE/DATETIME` para datas, `ENUM` para listas pré-definidas.
- **PRIMARY KEY (PK)**: identifica unicamente cada registro da tabela, geralmente com `AUTO_INCREMENT`.
- **FOREIGN KEY (FK)**: cria relacionamentos entre tabelas, garantindo integridade referencial.
- **AUTO_INCREMENT**: gera valores automáticos incrementais para chaves primárias.
- **NOT NULL**: torna campos obrigatórios, impedindo valores vazios.
- **UNIQUE**: garante que valores em uma coluna não se repitam.
- **DEFAULT**: define um valor padrão quando nenhum valor é informado.
- **INSERT**: adiciona novos registros nas tabelas, um ou múltiplos de uma vez.
- **UPDATE**: modifica registros existentes com base em condições.
- **DELETE**: remove registros de tabelas conforme filtros especificados.
- **SELECT**: consulta e recupera dados das tabelas.
- **WHERE**: filtra resultados baseado em condições específicas.
- **ORDER BY**: ordena resultados por colunas em ordem crescente (ASC) ou decrescente (DESC).
- **LIMIT**: limita a quantidade de registros retornados em uma consulta.
- **DISTINCT**: remove valores duplicados dos resultados.
- **INNER JOIN**: combina registros de tabelas relacionadas onde há correspondência.
- **LEFT JOIN**: retorna todos os registros da tabela esquerda e correspondências da direita.
- **ALTER TABLE**: modifica estrutura de tabelas (adicionar/remover colunas, alterar tipos).
- **DROP TABLE**: exclui tabelas inteiras do banco de dados.
- **TRUNCATE TABLE**: remove todos os registros mantendo a estrutura, resetando auto_increment.
- **ON DELETE CASCADE**: exclui registros relacionados automaticamente quando o registro pai é deletado.
- **ON DELETE SET NULL**: define como NULL as chaves estrangeiras quando o registro pai é deletado.
- **ON UPDATE CASCADE**: atualiza automaticamente chaves estrangeiras quando a chave primária é alterada.
- **GROUP BY**: agrupa resultados por uma ou mais colunas para análise.
- **Funções de agregação**: `COUNT` conta registros, `SUM` soma valores, `AVG` calcula média, `MAX` retorna maior valor, `MIN` retorna menor valor.
- **BETWEEN**: filtra valores dentro de um intervalo específico.
- **IN**: filtra valores que correspondem a uma lista de opções.
- **LIKE**: busca padrões de texto usando curingas (%).
- **CHECK**: valida se valores atendem a uma condição específica.
- **INDEX**: cria índices para acelerar consultas em colunas frequentemente pesquisadas.
- **Relacionamentos 1:N**: um registro de uma tabela se relaciona com muitos de outra.
- **Relacionamentos N:N**: muitos registros de uma tabela se relacionam com muitos de outra, resolvido com tabela associativa.
- **Normalização 1FN**: garante valores atômicos (sem multivalorados em uma célula).
- **Normalização 2FN**: elimina dependências parciais em chaves compostas.
- **Normalização 3FN**: elimina dependências transitivas entre atributos não-chave.
- **Dependências funcionais**: relação onde um atributo depende de outro para determinar seu valor.
- **Modelo conceitual**: representação abstrata de entidades e relacionamentos.
- **Modelo lógico**: organização em tabelas com atributos, chaves e tipos, independente de SGBD.
- **Modelo físico**: implementação real em um SGBD específico com sintaxe SQL completa.

Situações comuns encontradas nos exercícios de MySQL:
- modelagem de sistemas completos (biblioteca, escola, pet shop, hotel, cinema)
- criação de relacionamentos entre tabelas com chaves estrangeiras
- implementação de cascata (CASCADE/SET NULL) para manter integridade
- consultas complexas com JOIN para combinar dados de múltiplas tabelas
- uso de funções de agregação para gerar estatísticas e relatórios
- normalização de bancos para eliminar redundâncias
- manipulação de dados (inserção, atualização, exclusão) com filtros específicos

---

## Programação Orientada a Objetos (POO)

### Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 6 arquivos):**
- **Classes e Objetos**: Definição de estruturas de dados e suas instâncias. **- 6 arquivos**
- **Atributos**: Propriedades que armazenam o estado dos objetos. **- 6 arquivos**
- **Métodos**: Funções que definem o comportamento dos objetos. **- 6 arquivos**
- **Construtores**: Métodos especiais para inicialização de objetos. **- 6 arquivos**
- **Tipagem TypeScript**: Uso de tipos para garantir segurança no código. **- 6 arquivos**
- **Instanciação (new)**: Criação de objetos a partir de classes. **- 6 arquivos**
- **this**: Referência ao próprio objeto dentro de métodos. **- 6 arquivos**

**Conceitos Intermediários (presentes em 3-5 arquivos):**
- **Herança (extends)**: Criação de subclasses que herdam características de classes pai. **- 3 arquivos**
- **Encapsulamento (private, public)**: Uso de modificadores de acesso. **- 3 arquivos**
- **Arrays em classes**: Armazenamento de múltiplos objetos como propriedades. **- 3 arquivos**
- **Métodos com retorno**: Funções que retornam valores calculados. **- 4 arquivos**
- **Condicionais em métodos**: Uso de if/else para lógica de negócios. **- 4 arquivos**
- **Métodos void**: Funções que não retornam valor. **- 5 arquivos**
- **Parâmetros em métodos**: Passagem de dados para métodos. **- 6 arquivos**

**Conceitos Avançados (presentes em 1-2 arquivos):**
- **Relacionamentos de UML**: Implementação de associação, agregação e composição. **- 1 arquivo**
- **Multiplicidade**: Definição de cardinalidade entre classes (1..*, 1..1). **- 1 arquivo**
- **Generalização**: Herança múltipla e especialização de classes. **- 1 arquivo**
- **Loops em métodos**: Uso de for/while para processar coleções. **- 2 arquivos**
- **Super()**: Chamada ao construtor da classe pai. **- 2 arquivos**
- **Composição vs Agregação**: Diferenciação de relacionamentos todo-parte. **- 1 arquivo**

### Conceitos e Exemplos de Uso

Os arquivos da pasta P.O.O exploram conceitos de Programação Orientada a Objetos aplicados em TypeScript, desde classes básicas até implementações de diagramas UML.

- **Classes e Objetos**: Definição de estruturas de dados e suas instâncias.
- **Atributos**: Propriedades que armazenam o estado dos objetos.
- **Métodos**: Funções que definem o comportamento dos objetos.
- **Construtores**: Métodos especiais para inicialização de objetos.
- **Tipagem TypeScript**: Uso de tipos para garantir segurança no código.
- **Instanciação (new)**: Criação de objetos a partir de classes.
- **this**: Referência ao próprio objeto dentro de métodos.
- **Herança (extends)**: Criação de subclasses que herdam características de classes pai.
- **Encapsulamento (private, public)**: Uso de modificadores de acesso.
- **Arrays em classes**: Armazenamento de múltiplos objetos como propriedades.
- **Métodos com retorno**: Funções que retornam valores calculados.
- **Condicionais em métodos**: Uso de if/else para lógica de negócios.
- **Métodos void**: Funções que não retornam valor.
- **Parâmetros em métodos**: Passagem de dados para métodos.
- **Relacionamentos de UML**: Implementação de associação, agregação e composição.
- **Multiplicidade**: Definição de cardinalidade entre classes (1..*, 1..1).
- **Generalização**: Herança múltipla e especialização de classes.
- **Loops em métodos**: Uso de for/while para processar coleções.
- **Super()**: Chamada ao construtor da classe pai.
- **Composição vs Agregação**: Diferenciação de relacionamentos todo-parte.

Situações comuns encontradas nos exercícios:
- modelagem de sistemas reais (biblioteca, escola, loja virtual)
- cadastro de entidades (pessoas, produtos, funcionários)
- cálculos e conversões (IMC, temperatura, descontos)
- controle de estoque e operações bancárias
- implementação de relacionamentos entre classes
- herança e especialização de objetos

---

## Licença

Este projeto está licenciado sob a **Licença MIT**.

### Detalhes da Licença MIT

**Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, fundir, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e permitir que as pessoas a quem o Software é fornecido o façam, sujeitas às seguintes condições:**

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

**O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO. EM NENHUM CASO OS AUTORES OU TITULARES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, TORT OU OUTRA, PROVENIENTE DE, OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.**
