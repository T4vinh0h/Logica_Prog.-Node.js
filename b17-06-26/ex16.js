// Exercício 16 — Função com while
// 
// Crie uma função chamada `contagemRegressiva`.
// A função deve receber um número como parâmetro e exibir uma contagem regressiva até 0 usando `while`.
// Exemplo:
// contagemRegressiva(5);
// Resultado esperado:
// 5
// 4
// 3
// 2
// 1
// 0

function contagemRegressiva(numero) {
    for (let i = 1; i <= numero ; i--) {
       console.log( `${i}`);
    }
}
contagemRegressiva(10);