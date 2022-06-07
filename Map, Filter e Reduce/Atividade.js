//Map: Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
//Utilizando this
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg)
}

const numss = [1, 2];

console.log( 'this -> maçã', mapComThis (numss, maca))
console.log( 'this -> laranja', mapComThis (numss, laranja))

//sem o this

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 5;
    });
}

const nums = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(mapSemThis(nums));

console.log(nums);


//Filter: Filtre e retorne todos os números pares de um array.

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 4, 34, 57, 71, 102, 107];
const frase = "Os números pares são: ";

console.log(frase + filtraPares(meuArray))

//Reduce: Some todos os números de um array

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const ar = [1, 2, 3];
let frase1 = "A soma é ";
console.log(frase1 + somaNumeros(ar))

//Reduce: Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista = [
    {
        nome: 'sabao em po',
        preco: 30,
    },
    {
        nome: 'amaciante',
        preco: 17,
    },
    {
        nome: 'toalha',
        preco: 26,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista,) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

const resp = "Seu saldo é ";
console.log(resp + calculaSaldo(saldoDisponivel, lista));