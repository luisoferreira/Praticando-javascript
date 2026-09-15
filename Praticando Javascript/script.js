

// let nome = "Diogo";
// let idade = 30;

// //  CONCATENÇÃO
// console.log("Nome: " + nome + ", idade:" +idade);

// // interposição
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" +3;
// let sub = "5" -3;

// console.log(soma);
// console.log(sub);


// console.log(typeof soma);
// console.log(typeof sub);


// let numero ="53"; //STRING

// let convertido = Number(numero)   //Converte o valor para number

// console.log(typeof convertido);


//OPERADORES RELACIONAIS

// //VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true


// //VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false

// // &&
// // ||
// // 


// //ESTRUTURA DE REPETIÇÃO 
// let frutas = ["Maça" ,"Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`)
// )



//FUNÇÕES NATIVAS JS
//FUNÇÃO MAP()
//PERCORRE UMA LISTA E CRIA UMA NOVA LISTA COM BASE EM UMA CONDIÇÃO 

// let numeros =[1,2,3,4];

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

//numerosDobrados = [2,4,6,8]

// console.log(numerosDobrados);

// ou assim
//Arrow function com retorno implicito

// let numerosDobradosArrow = numeros.map(num => num * 2);

//FILTER
// Filtra os elementos com base em uma condição 

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);


// //maioresQueDez = [15,20]
// console.log(maioresQueDez);

//REDUCE
//Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4];

// //ACUMULADOR inicia em 0
// //variavel auxiliar
// //acumulador começa em 0 e soma com o auxiliar até o ultimo valor do array 

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);


// FIND 
// Retorna o primeiro elemento que atende a condição 

// let produtos = [
//     { id:1 , nome: "Teclado", preço: 50 } , //produtos
//     { id:2 , nome: "Mouse", preço:30}
    
// ]

// let item = produtos.find(produto => produto.id === 2)

// console.log(item);


//DIFERENÇA ENTRE FILTER E FIND 
let itemFiltrado = produtos.filter(produto => produto.id === 2)

console.log(itemFiltrado);



