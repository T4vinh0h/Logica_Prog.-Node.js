// Exercício 5 — Remoção de Propriedades de Objeto
//
// Construa um objeto denominado `funcionario` com as propriedades:
//
// - nome
// - cargo
// - salario
//
// Execute a remoção da propriedade `salario` utilizando o operador `delete`.
//
// Apresente o estado do objeto antes e após a remoção da propriedade.

const funcionario = { 
    nome: "Lobato",
    cargo:"Full Stack Developer",
    salario: 3000
};
console.log(`Antes da remoção: ${funcionario.nome}, ${funcionario.cargo}, ${funcionario.salario}`);
delete funcionario.salario;
console.log(`Depois da remoção - Nome:${funcionario.nome}, Cargo:${funcionario.cargo}, salario:${funcionario.salario}`);
