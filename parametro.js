
// console.log(soma(1, 5))
// console.log(soma(3, 3))
// console.log(soma(213, 342))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Seu nome é ${nome} e você tem ${idade} anos de idade`;
}

console.log(nomeIdade('Pedro', 19))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5)))