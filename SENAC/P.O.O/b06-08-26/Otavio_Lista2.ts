// ========================================
// Lista de Exercícios 02 – JavaScript
// POO – Pilar da Abstração
// ========================================

// ========================================
// Exercício 11 – Cadastro de Funcionário
// ========================================
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    mostrarFuncionario(): void {
        console.log(`Funcionário: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
        console.log('-------------------');
    }
}

// Criando três funcionários diferentes
const func1 = new Funcionario('João Silva', 'Desenvolvedor', 5000);
const func2 = new Funcionario('Maria Santos', 'Analista', 4500);
const func3 = new Funcionario('Pedro Oliveira', 'Gerente', 7000);

console.log('=== Exercício 11 - Cadastro de Funcionário ===');
func1.mostrarFuncionario();
func2.mostrarFuncionario();
func3.mostrarFuncionario();

// ========================================
// Exercício 12 – Conversor de Temperatura
// ========================================
class Temperatura {
    celsius: number;

    constructor(celsius: number) {
        this.celsius = celsius;
    }

    converterParaFahrenheit(): number {
        return (this.celsius * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.celsius + 273.15;
    }
}

const temp = new Temperatura(25);
console.log('\n=== Exercício 12 - Conversor de Temperatura ===');
console.log(`Temperatura em Celsius: ${temp.celsius}°C`);
console.log(`Temperatura em Fahrenheit: ${temp.converterParaFahrenheit().toFixed(2)}°F`);
console.log(`Temperatura em Kelvin: ${temp.converterParaKelvin().toFixed(2)}K`);

// ========================================
// Exercício 13 – Calculadora de IMC
// ========================================
class PessoaIMC {
    nome: string;
    peso: number;
    altura: number;

    constructor(nome: string, peso: number, altura: number) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): number {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(): string {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Sobrepeso';
        } else {
            return 'Obesidade';
        }
    }
}

const pessoa = new PessoaIMC('Carlos', 70, 1.75);
console.log('\n=== Exercício 13 - Calculadora de IMC ===');
console.log(`Nome: ${pessoa.nome}`);
console.log(`Peso: ${pessoa.peso} kg`);
console.log(`Altura: ${pessoa.altura} m`);
console.log(`IMC: ${pessoa.calcularIMC().toFixed(2)}`);
console.log(`Classificação: ${pessoa.classificarIMC()}`);

// ========================================
// Exercício 14 – Cadastro de Filmes
// ========================================
class Filme {
    nome: string;
    genero: string;
    duracao: number;

    constructor(nome: string, genero: string, duracao: number) {
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
    }

    assistir(): void {
        console.log(`Você está assistindo o filme ${this.nome}.`);
    }
}

const filme1 = new Filme('Avatar', 'Ficção Científica', 162);
const filme2 = new Filme('Interestelar', 'Ficção Científica', 169);
const filme3 = new Filme('O Poderoso Chefão', 'Drama', 175);

console.log('\n=== Exercício 14 - Cadastro de Filmes ===');
filme1.assistir();
filme2.assistir();
filme3.assistir();

// ========================================
// Exercício 15 – Calculadora de Desconto
// ========================================
class Compra {
    produto: string;
    valor: number;

    constructor(produto: string, valor: number) {
        this.produto = produto;
        this.valor = valor;
    }

    aplicarDesconto(percentual: number): number {
        const desconto = this.valor * (percentual / 100);
        const novoValor = this.valor - desconto;
        console.log(`Produto: ${this.produto}`);
        console.log(`Valor original: R$ ${this.valor.toFixed(2)}`);
        console.log(`Desconto: ${percentual}%`);
        console.log(`Valor com desconto: R$ ${novoValor.toFixed(2)}`);
        return novoValor;
    }
}

const compra = new Compra('Notebook', 3500);
console.log('\n=== Exercício 15 - Calculadora de Desconto ===');
compra.aplicarDesconto(10);

// ========================================
// Exercício 16 – Elevador
// ========================================
class Elevador {
    andarAtual: number;

    constructor() {
        this.andarAtual = 0; // Térreo
    }

    subir(): void {
        if (this.andarAtual < 10) {
            this.andarAtual++;
            console.log(`Subindo para o andar ${this.andarAtual}`);
        } else {
            console.log('Não é possível subir acima do décimo andar.');
        }
    }

    descer(): void {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Descendo para o andar ${this.andarAtual}`);
        } else {
            console.log('Não é possível descer abaixo do térreo.');
        }
    }
}

const elevador = new Elevador();
console.log('\n=== Exercício 16 - Elevador ===');
elevador.subir();
elevador.subir();
elevador.subir();
elevador.descer();
elevador.descer();
elevador.descer();

// ========================================
// Exercício 17 – Cronômetro
// ========================================
class Cronometro {
    segundos: number;

    constructor(segundos: number) {
        this.segundos = segundos;
    }

    iniciar(): void {
        console.log('\n=== Exercício 17 - Cronômetro ===');
        console.log(`Iniciando cronômetro de ${this.segundos} segundos:`);
        for (let i = 1; i <= this.segundos; i++) {
            console.log(`${i} segundo(s)`);
        }
        console.log('Cronômetro finalizado!');
    }
}

const cronometro = new Cronometro(5);
cronometro.iniciar();

// ========================================
// Exercício 18 – Caixa Eletrônico
// ========================================
class CaixaEletronico {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log('Saldo insuficiente para saque.');
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
}

const caixa = new CaixaEletronico(1000);
console.log('\n=== Exercício 18 - Caixa Eletrônico ===');
caixa.consultarSaldo();
caixa.depositar(500);
caixa.sacar(200);
caixa.sacar(2000); // Tentativa de saque maior que o saldo

// ========================================
// Exercício 19 – Cadastro de Produtos
// ========================================
class Mercado {
    produtos: string[];

    constructor() {
        this.produtos = ['Arroz', 'Feijão', 'Macarrão', 'Açúcar', 'Café'];
    }

    listarProdutos(): void {
        console.log('\n=== Exercício 19 - Cadastro de Produtos ===');
        console.log('Lista de Produtos:');
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`${i + 1}. ${this.produtos[i]}`);
        }
    }
}

const mercado = new Mercado();
mercado.listarProdutos();

// ========================================
// Exercício 20 – Jogo de Adivinhação
// ========================================
class Jogo {
    numeroSecreto: number;

    constructor(numeroSecreto: number) {
        this.numeroSecreto = numeroSecreto;
    }

    jogar(numero: number): void {
        if (numero === this.numeroSecreto) {
            console.log('Parabéns! Você acertou.');
        } else {
            console.log('Tente novamente.');
        }
    }
}

const jogo = new Jogo(7);
console.log('\n=== Exercício 20 - Jogo de Adivinhação ===');
jogo.jogar(5);
jogo.jogar(7);

// ========================================
// Exercício 21 – Sistema de Biblioteca ★★
// ========================================
class Biblioteca {
    nome: string;
    quantidadeLivros: number;

    constructor(nome: string, quantidadeLivros: number) {
        this.nome = nome;
        this.quantidadeLivros = quantidadeLivros;
    }

    emprestarLivro(): void {
        if (this.quantidadeLivros > 0) {
            this.quantidadeLivros--;
            console.log(`Livro emprestado. Quantidade atual: ${this.quantidadeLivros}`);
        } else {
            console.log('Não há livros disponíveis para empréstimo.');
        }
        this.mostrarQuantidade();
    }

    devolverLivro(): void {
        this.quantidadeLivros++;
        console.log(`Livro devolvido. Quantidade atual: ${this.quantidadeLivros}`);
        this.mostrarQuantidade();
    }

    mostrarQuantidade(): void {
        console.log(`Quantidade de livros na biblioteca ${this.nome}: ${this.quantidadeLivros}`);
    }
}

const biblioteca = new Biblioteca('Biblioteca Central', 5);
console.log('\n=== Exercício 21 - Sistema de Biblioteca ===');
biblioteca.mostrarQuantidade();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro(); // Tentativa quando não há livros
biblioteca.devolverLivro();

// ========================================
// Exercício 22 – Estacionamento ★★★
// ========================================
class Estacionamento {
    vagasTotais: number;
    vagasOcupadas: number;

    constructor(vagasTotais: number) {
        this.vagasTotais = vagasTotais;
        this.vagasOcupadas = 0;
    }

    entrarCarro(): void {
        if (this.vagasOcupadas < this.vagasTotais) {
            this.vagasOcupadas++;
            console.log('Carro entrou no estacionamento.');
        } else {
            console.log('Estacionamento lotado. Não é possível entrar.');
        }
        this.mostrarStatus();
    }

    sairCarro(): void {
        if (this.vagasOcupadas > 0) {
            this.vagasOcupadas--;
            console.log('Carro saiu do estacionamento.');
        } else {
            console.log('Não há veículos no estacionamento.');
        }
        this.mostrarStatus();
    }

    mostrarStatus(): void {
        console.log(`Vagas ocupadas: ${this.vagasOcupadas}/${this.vagasTotais}`);
        console.log(`Vagas livres: ${this.vagasTotais - this.vagasOcupadas}`);
    }
}

const estacionamento = new Estacionamento(5);
console.log('\n=== Exercício 22 - Estacionamento ===');
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.sairCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro(); // Tentativa quando está lotado
estacionamento.sairCarro();
estacionamento.sairCarro();
estacionamento.sairCarro();
estacionamento.sairCarro();
estacionamento.sairCarro(); // Tentativa quando não há veículos

// ========================================
// Exercício 23 – Sistema de Votação ★★★
// ========================================
class Eleicao {
    votosCandidato1: number;
    votosCandidato2: number;
    votosBrancos: number;

    constructor() {
        this.votosCandidato1 = 0;
        this.votosCandidato2 = 0;
        this.votosBrancos = 0;
    }

    votar(opcao: number): void {
        if (opcao === 1) {
            this.votosCandidato1++;
        } else if (opcao === 2) {
            this.votosCandidato2++;
        } else {
            this.votosBrancos++;
        }
    }

    resultado(): void {
        console.log('\n=== Exercício 23 - Sistema de Votação ===');
        console.log('Resultado da Eleição:');
        console.log(`Votos Candidato 1: ${this.votosCandidato1}`);
        console.log(`Votos Candidato 2: ${this.votosCandidato2}`);
        console.log(`Votos em Branco: ${this.votosBrancos}`);

        if (this.votosCandidato1 > this.votosCandidato2) {
            console.log('Vencedor: Candidato 1');
        } else if (this.votosCandidato2 > this.votosCandidato1) {
            console.log('Vencedor: Candidato 2');
        } else {
            console.log('Empate entre os candidatos');
        }
    }
}

const eleicao = new Eleicao();
console.log('\n=== Exercício 23 - Sistema de Votação ===');
console.log('Simulando 20 votos...');
for (let i = 0; i < 20; i++) {
    const voto = Math.floor(Math.random() * 3) + 1; // 1, 2 ou 3 (branco)
    eleicao.votar(voto);
}
eleicao.resultado();

// ========================================
// Exercício 24 – Controle de Estoque Completo ★★★★
// ========================================
class Estoque {
    nomeProduto: string;
    quantidade: number;

    constructor(nomeProduto: string, quantidade: number) {
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }

    entradaProduto(qtd: number): void {
        this.quantidade += qtd;
        console.log(`Entrada de ${qtd} unidades de ${this.nomeProduto}.`);
        this.consultar();
    }

    saidaProduto(qtd: number): void {
        if (this.quantidade >= qtd) {
            this.quantidade -= qtd;
            console.log(`Saída de ${qtd} unidades de ${this.nomeProduto}.`);
        } else {
            console.log(`Quantidade insuficiente. Estoque atual: ${this.quantidade}`);
        }
        this.consultar();
    }

    consultar(): void {
        console.log(`Estoque de ${this.nomeProduto}: ${this.quantidade} unidades`);
    }
}

const estoque = new Estoque('Camisetas', 50);
console.log('\n=== Exercício 24 - Controle de Estoque Completo ===');
estoque.consultar();
estoque.entradaProduto(20);
estoque.saidaProduto(15);
estoque.saidaProduto(60); // Tentativa de saída maior que o estoque
estoque.saidaProduto(30);

// ========================================
// Exercício 25 – Sistema de Cadastro de Alunos ★★★★★
// ========================================
class AlunoEscola {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    getSituacao(): string {
        return this.calcularMedia() >= 6 ? 'Aprovado' : 'Reprovado';
    }
}

class Escola {
    alunos: AlunoEscola[];

    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno: AlunoEscola): void {
        this.alunos.push(aluno);
    }

    listarAlunos(): void {
        console.log('\n=== Exercício 25 - Sistema de Cadastro de Alunos ===');
        console.log('Lista de Alunos:');
        for (const aluno of this.alunos) {
            const media = aluno.calcularMedia();
            const situacao = aluno.getSituacao();
            console.log(`Nome: ${aluno.nome}`);
            console.log(`Média: ${media.toFixed(2)}`);
            console.log(`Situação: ${situacao}`);
            console.log('---');
        }
    }

    mostrarAprovados(): void {
        console.log('\nAlunos Aprovados:');
        for (const aluno of this.alunos) {
            if (aluno.getSituacao() === 'Aprovado') {
                console.log(`- ${aluno.nome} (Média: ${aluno.calcularMedia().toFixed(2)})`);
            }
        }
    }

    mostrarReprovados(): void {
        console.log('\nAlunos Reprovados:');
        for (const aluno of this.alunos) {
            if (aluno.getSituacao() === 'Reprovado') {
                console.log(`- ${aluno.nome} (Média: ${aluno.calcularMedia().toFixed(2)})`);
            }
        }
    }
}

const escola = new Escola();
escola.adicionarAluno(new AlunoEscola('Ana', 7.5, 8.0));
escola.adicionarAluno(new AlunoEscola('Bruno', 5.0, 6.0));
escola.adicionarAluno(new AlunoEscola('Carla', 8.5, 9.0));
escola.adicionarAluno(new AlunoEscola('Daniel', 4.0, 5.5));
escola.adicionarAluno(new AlunoEscola('Elena', 6.5, 7.0));

escola.listarAlunos();
escola.mostrarAprovados();
escola.mostrarReprovados();
