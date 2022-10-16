// 4) Geometria? Nós dominamos!
// Crie 2 funções que calculem propriedades de um círculo. 
// Sabe as fórmulas? Vamos pesquisar? 

// Crie uma função chamada calcularCircunferencia:
// - Passe o raio para a função como argumento.
// - Calcule a circunferência com base no raio e gere "A circunferência é X".

// Crie uma função chamada calcularArea:
// - Passe o raio para a função como argumento.
// - Calcule a área com base no raio e gere "A área é Y".

// Escreva os resultados em tela. 

// Chame cada uma  das funções três vezes com diferentes conjuntos de valores.

function escolha() {
    var escolha = prompt("Ola usuario, digite '1' para calcular circunferencia e '2' para calcular area do circulo.")
    if (escolha == '1') {
        calcularCircunferencia();
    } else if (escolha == '2') {
        calcularArea();
    } else {
        erro();
    }
}

function calcularCircunferencia() {
    var raio = parseFloat(prompt('Qual o valor do raio do circulo?'));
    var circunferencia = 2 * 3.14 * raio;
    alert("A circunferência é: " + circunferencia.toFixed(2));
    escolha();
}

function calcularArea() {
    var raio = parseFloat(prompt('Qual o valor do raio do circulo?'));
    var area = 3.14 * raio ** 2;
    alert("A área do círculo é de: " + area.toFixed(2));
    escolha();
}

function erro() {
    alert("Por favor, digite '1' ou '2'");
    escolha();
}

escolha();