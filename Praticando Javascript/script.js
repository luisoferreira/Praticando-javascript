

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
//     { id:2 , nome: "Mouse", preço:30} , 
//     { id: 2, nome: "Caderno" , preço:30}

// ]

// let item = produtos.find(produto => produto.id === 2)

// console.log(item);


// //DIFERENÇA ENTRE FILTER E FIND 
// //find -> retorna somente o primeiro elemento que ele econtra com a condição
// //filter -> retorna todos os elementos que encontra com a condição 
// let itemFiltrado = produtos.filter(produto => produto.id === 2)

// console.log(itemFiltrado);

// produtos.filter(function(produto)
// {
//      produto.id === 2
// })



// SPLIT 
// DIVIDE A STRING EM PARTES , TRANSFORMANDO EM UM ARRAY 
// let frase = "JS é top"

// let palavras = frase.split(" ")
// console.log(palavras);



// //TRIM
//trim remove espaços no inicio e final de string
// let nome = "     Paulo"
// let nomeLimpo = nome.trim()

//     console.log(nome);

//     console.log(nomeLimpo);


//INCLUDES
//Verifica se existe um valor dentro de uma lista e retorna um booleano
//verdadeiro ou falso 

// let frutas = ["maça" ,"banana"]

// let frutasIncludes = frutas.includes("maça")
// console.log(frutasIncludes);


// let nome = "LUIS"
// let cargo = "aluno"

// console.log(nome.toLowerCase()); // luis
// console.log(cargo.toUpperCase());  // ALUNO

// FOREACH 
//PERCORRE O ARRAY E IMPRIME OS NOMES AI (GUILHERME , LUIS , MURILO )
// let nomes = ["Guilherme" , "Luis" , "Murilo"]

// nomes.forEach(nome =>console.log(nome));


//SOME
// Verifica se pelo menos um item atende a condição
// retorna um booleano 

// let numeros = [1, 3, 5, 8]

// let temPar = numeros.some(num => num % 2 === 0)
// console.log(temPar);  // true

//EVERY 
//Verifique se todos os elementos atende a condição 
// let todosPares = numeros.every(num => num % 2 === 0)
// console.log(todosPares);  // false 


//SORT
//Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4]
// let letras =  ["c" , "a" , "x" , "h"]

// //para letras 
// letras.sort()
// console.log(letras);

// //para numeros
// numeros.sort((a, b) => a-b)
// console.log(numeros);


//REVERSE
//inverte a ordem dos elementos no array 
// let numeros = [ 1, 2, 3]

// numeros.reverse();
// console.log(numeros); // 3, 2, 1


//JOIN
//Junta os elementos de um array em uma string
// let palavras = ["JS", "é" , "top"];

// let frase = palavras.join(" ")
// console.log(frase);


//ADICIONANDO E REMOVENDO ELEMENTOS DE UM ARRAY 
//RUSH
//POP
//SHIFT
//UNSHIFT

// let lista = ["A", "B"]

// //PUSH -> Adiciona elementos no final do array 
// lista.push("C") //Adicionando
// console.log(lista);

// //POP -> Remove os elementos no final da lista
// lista.pop(); //Removendo
// console.log(lista);

// //SHIFT -> Remove elementos no começo da lista 
// lista.shift(); //remove
// console.log(lista);

// //UNSHIFT -> Adicionar elementos no inicio da lista
// lista.unshift("A");
// console.log(lista);


//SLICE
//Cria uma cópia de uma parte da lista 

/*
    array.slice(inicial, final)

    inicial -> onde começa
    final -> onde termina (nao inclui a posição/indice/index)
*/

// let numeros = [1, 2, 3, 4];

// let parte = numeros.slice(1, 3); //posições do array
// console.log(parte);


//SPLICE

/*
    array.splice(index, count, item1, ....., itemX)

    index -> indice(posição do elemento no array)
    count -> numero de elementos a serem removidos (pode ser 0)
    item, ..., itemX -> itens a serem adicionados
*/

//Remove ou adiciona elementos em qualquer posição 

// let numeros = [1, 2, 3, 4];

// //removendo elementos sem adicionar
// numeros.splice(1,1);
// console.log(numeros);

// //removendo elementos e adicionando mais dois elementos
// let frutas =["Banana", "Laranja", "Maça", "Manga"]

// // frutas.splice(0, 3, "Limão", "kiwi");
// // console.log(frutas); ("Limão", "kiwi" ,"Manga")

// //Adicionando elementos sem remover 
// frutas.splice(2,0, "Limão", "kiwi");
// console.log(frutas);


//REPLACE
//Substitui uma parte da string
/*
    replace(valorProcurado, "ValorQueSubstitui")

*/

// let texto = "Olá, mundo!";

// let novoTexto = texto.replace("mundo" , "Cliente");
// console.log(novoTexto);


//NOSSAS FUNÇÕES

//função comum 
// function exibirMensagens() {
//     console.log("Bem vindo(a)!");

// }

// exibirMensagens()

// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`);

// }

// cumprimentar("Ana")
// cumprimentar("Carlos")


//Funão com mais de um parametro 

// function somar(n1, n2) {
//     let soma = n1 +  n2
//     console.log(soma);

// }

// somar(2,3);

//outra forma de fazer a nova função de somar()
// const somar = (n1, n2) => n1 + n2;

//     console.log(somar(1,2));


//PROMPT
//recebe/solicita uma informação do usuario
//o valor recebido pelo prompt() normamente é string 

let nome = prompt("Digite seu nome: ")

console.log(nome);

//recebendo um numero e convertendo 

//Number() -> converte de forma generica 
let idade = Number(prompt("Digite sua idade: "))


//Parseint() -> Converte o valor para um numero inteiro 

idade = Number(prompt("Digite sua idade: "));

//Parsefloat() -> Converte um valor para o numero decimal/ponto flutuante
idade = parseFloat(prompt("Digite sua idade"));
