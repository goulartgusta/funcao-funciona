// 3) Quanta fome a gente tem?
// Você já se perguntou quanto custa um "suprimento vitalício" da sua comida favorita? 
// Não se pergunte mais!

// Escreva uma função chamada calcularMeuLanche que:
// - aceita 2 argumentos: "idade", "quantidade de lanches por dia".
// - calcula a quantidade consumida para o resto da vida (com base em uma idade máxima constante).
// - exibe o resultado na tela da seguinte forma: "Você precisará de NN para durar até a idade X"

// Chame essa função três vezes, passando valores diferentes a cada vez.

function calcularMeuLanche() {
    var idade = parseInt(prompt("Ola usuario! Digite a sua idade?"));
    var lanches = parseInt(prompt("Digite quantos lanches você come por dia:"));
    var velhice = 100;
    var soma = (lanches * 365) * (velhice - idade);
    alert("Você precisará de " + soma + " para durar até a idade " + velhice);
}

calcularMeuLanche();