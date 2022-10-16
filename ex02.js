//2) Não acabou não
// Com base na questão acima, repita todo o procedimento, mas adicione e exiba mais dois valores nos argumentos: o nome do pet e a espécie dele. 

// Então
// - Exiba o resultado na tela com a mensagem: "Batatinha tem X anos em anos de verdade! Um(a) baleia tem uma relação de Y anos de baleia para cada 1 ano humano". (Batatinha, X, baleia e Y são variáveis que serão substituídas)

// Chame a função três vezes com diferentes conjuntos de valores.

function calcularIdadePet() {
    var escolha = prompt("Olá usuário! Bem vindo ao cáculo de idade do seu pet, por favor, digite uma das três opções: 'cachorro'; 'gato'; 'cavalo'");
    var idade = parseInt(prompt("Muito bem! Agora, quantos anos tem seu pet?"));
    var especie = prompt("Informe também a especie do seu pet:")
    var nomePet = prompt("Informe o nome do seu pet: ");
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
            alert(nomePet +  " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + cachorro + " anos em anos humanos!");
        }

    } else if (escolha == 'gato'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + gato + " anos em anos humanos!");
        }

    } else if (escolha == 'cavalo'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + cavalo + " anos em anos humanos!");
        }

    } else{
        alert("Por favor, digite uma das três opções...");
        calcularIdadePet();
    }
    calcularIdadePet();
}

calcularIdadePet();