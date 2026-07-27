# Aprendizado de Programação - UniSenac

## Pré-requisitos

- Node.js instalado
- npm (Node Package Manager)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/T4vinh0h/Logica_Prog.-Node.js.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Logica_Prog.-Node.js
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar

Para executar qualquer exercício, use o Node.js:

```bash
node caminho/para/o/arquivo.js
```

Por exemplo:
```bash
node SENAC/Logica\ Prog/exemplo.js
```

## Estrutura do Projeto

```
Logica_Prog.-Node.js/
├── SENAC/
│   ├── Logica Prog/      # Exercícios de lógica de programação
│   ├── MySQL/            # Exercícios relacionados a MySQL
│   ├── P.O.O/            # Programação Orientada a Objetos
│   └── UGC_23-06-26/     # Material específico
├── node_modules/         # Dependências instaladas
├── package.json          # Configuração do projeto
├── package-lock.json     # Lock das dependências
├── LICENSE               # Licença do projeto
└── README.md             # Documentação
```

## Dependências

- **prompt-sync**: Biblioteca para leitura de entrada de dados via console de forma síncrona.


## Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 40+ arquivos):**
- **Variáveis e constantes (let, const, var)** - 340 arquivos
- **Operadores aritméticos (+, -, *, /)** - 365 arquivos
- **console.log** - 338 arquivos
- **Template strings (`${}`)** - 157 arquivos
- **Comentários** - 340 arquivos
- **Entrada de dados com prompt-sync** - 176 arquivos
- **Conversão de tipos (Number(), parseFloat(), parseInt())** - 99 arquivos

**Conceitos Intermediários (presentes em 20-40 arquivos):**
- **Condicionais (if, else, else if)** - 150 arquivos
- **Operadores de comparação (>, <, >=, <=, ==, ===, !=)** - 229 arquivos
- **Operadores lógicos (&&, ||, !)** - 115 arquivos
- **Valores booleanos (true, false)** - 33 arquivos
- **Strings e manipulação básica** - 35 arquivos
- **Validações de entrada** - 98 arquivos

**Conceitos Avançados (presentes em 5-15 arquivos):**
- **Loops (while, for)** - 125 arquivos
- **Switch case** - 17 arquivos
- **Arrays** - 99 arquivos
- **Métodos de arrays (push)** - 24 arquivos
- **Funções declaradas** - 75 arquivos
- **Estruturas aninhadas** - 88 arquivos
- **Break e continue** - 26 arquivos
- **Cálculos matemáticos complexos** - 38 arquivos
- **toFixed() para formatação** - 21 arquivos
- **toLowerCase(), toUpperCase(), trim()** - 8 arquivos
- **typeof** - 5 arquivos

## Conceitos e Exemplos de Uso

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

## MySQL - Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 8+ arquivos):**
- **CREATE DATABASE** - 8 arquivos
- **CREATE TABLE** - 8 arquivos
- **Tipos de dados (INT, VARCHAR, DECIMAL, DATE, DATETIME, YEAR, ENUM, BOOLEAN, TEXT)** - 8 arquivos
- **PRIMARY KEY (PK)** - 8 arquivos
- **FOREIGN KEY (FK)** - 8 arquivos
- **AUTO_INCREMENT** - 8 arquivos
- **NOT NULL** - 8 arquivos
- **UNIQUE** - 6 arquivos
- **DEFAULT** - 6 arquivos

**Conceitos Intermediários (presentes em 4-7 arquivos):**
- **INSERT** - 7 arquivos
- **UPDATE** - 7 arquivos
- **DELETE** - 7 arquivos
- **SELECT** - 7 arquivos
- **WHERE** - 7 arquivos
- **ORDER BY** - 7 arquivos
- **LIMIT** - 6 arquivos
- **DISTINCT** - 5 arquivos
- **INNER JOIN** - 5 arquivos
- **LEFT JOIN** - 5 arquivos
- **ALTER TABLE** - 6 arquivos
- **DROP TABLE** - 6 arquivos
- **TRUNCATE TABLE** - 5 arquivos
- **ON DELETE CASCADE** - 4 arquivos
- **ON DELETE SET NULL** - 4 arquivos
- **ON UPDATE CASCADE** - 4 arquivos

**Conceitos Avançados (presentes em 1-3 arquivos):**
- **GROUP BY** - 3 arquivos
- **Funções de agregação (COUNT, SUM, AVG, MAX, MIN)** - 3 arquivos
- **BETWEEN** - 5 arquivos
- **IN** - 5 arquivos
- **LIKE** - 3 arquivos
- **CHECK** - 2 arquivos
- **INDEX** - 2 arquivos
- **Relacionamentos 1:N e N:N** - 8 arquivos
- **Normalização (1FN, 2FN, 3FN)** - 2 arquivos
- **Dependências funcionais** - 2 arquivos
- **Modelo conceitual, lógico e físico** - 3 arquivos

## MySQL - Conceitos e Exemplos de Uso

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

## P.O.O. - Programação Orientada a Objetos

**Conceitos Identificados:**

Esta pasta está reservada para exercícios de Programação Orientada a Objetos em JavaScript/Node.js.

**Conceitos que serão abordados (planejamento):**
- **Classes e Objetos**: estruturas para modelar entidades do mundo real
- **Atributos e Métodos**: características e comportamentos dos objetos
- **Encapsulamento**: proteção de dados internos dos objetos
- **Herança**: reutilização de código entre classes relacionadas
- **Polimorfismo**: comportamentos diferentes para métodos com mesmo nome
- **Construtores**: inicialização de objetos
- **Getters e Setters**: acesso controlado a atributos
- **Módulos**: organização de código em arquivos separados

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---