// 1) Quantos anos tem o seu pet?
// Você sabe quantos anos seu cachorro tem em anos humanos, mas e quanto aos anos de cachorro? 
// E se fosse uma baleia? 
// E se fosse um canguru? 

// Vamos calcular?

// Vamos começar com uma pesquisa. 
// - Pesquise diferente animais e sua relação de idade com seres humanos. 

// Agora, escreva uma função chamada calcularIdadePet que:
// - Tem dois argumentos: a idade do seu cachorro e a taxa de conversão que será calculada.
// - Calcula a idade do seu pet com base na taxa de conversão (1 ano humano equivale a 7 anos de cachorro, por exemplo).
// - Exiba o resultado na tela com a mensagem: "Seu pet tem X anos em anos humanos!"

// Chame a função três vezes com diferentes conjuntos de valores.


function calcularIdadePet() {
    var escolha = prompt("Olá usuário! Bem vindo ao cáculo de idade do seu pet, por favor, digite uma das três opções: 'cachorro'; 'gato'; 'cavalo'");
    var idade = parseInt(prompt("Muito bem! Agora, quantos anos tem seu pet?"));
    var cachorro = idade * 7;
    var gato = idade * 12;
    var cavalo = idade * 6.5;

    if (escolha == 'cachorro') {
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert("Seu cachorro tem " + cachorro + " anos em anos humanos!");
        }

    } else if (escolha == 'gato'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert("Seu gato tem " + gato + " anos em anos humanos!");
        }

    } else if (escolha == 'cavalo'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert("Seu cavalo tem " + cavalo + " anos em anos humanos!");
        }

    } else{
        alert("Por favor, digite uma das três opções...");
        calcularIdadePet();
    }
    calcularIdadePet();
}

calcularIdadePet();