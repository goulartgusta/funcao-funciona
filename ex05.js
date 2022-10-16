// 5) Tá quente. Muito quente. Quente demaaaais.
// Vamos fazer um conversor de temperaturas.

// Crie uma função chamada converterCelsiusFahrenheit. 
// Ela deve:
// - Armazenar uma temperatura Celsius em uma variável.
// - Converter-la para  Fahrenheit e escrever a mensagem: "X° C é igual a Y° F". (X e Y são os valores que devem ser substituídos.) 

// Crie uma função chamada converterFahrenheitCelsius. 
// Ela deve: 
// - Armazenar uma temperatura fahrenheit em uma variável.
// - Converter-la para Celsius e escrever a mensagem:  " X° F é igual a Y° C." (X e Y são os valores que devem ser substituídos.) 

function escolha() {
    var escolha = prompt("Ola usuario, digite '1' para converter Celsius para Fahrenheit e '2' para converter Fahrenheit para Celsius.")
    if (escolha == '1') {
        converterCelsiusFahrenheit();
    } else if (escolha == '2') {
        converterFahrenheitCelsius();
    } else {
        erro();
    }
}

function converterCelsiusFahrenheit(){
    var celsius = parseInt(prompt("Qual é a temperatura em Celsius?"));
    var fahrenheit = celsius * 1.8 + 32; 
    alert(celsius + "°C é igual a " + fahrenheit + "°F");
    escolha();
}

function converterFahrenheitCelsius(){
    var fahrenheit = parseInt(prompt("Qual é a temperatura em Fahrenheit?"));
    var celsius = (fahrenheit - 32) / 1.8;
    alert(fahrenheit + "°F é igual a " + celsius + "°C");
    escolha();
}

function erro() {
    alert("Por favor, digite '1' ou '2'");
    escolha();
}

escolha();