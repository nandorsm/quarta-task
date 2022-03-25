//Estruturas de Repetição
//01
// while(true){
//     let nota = parseInt(prompt("Digite uma nota valida"))
//     if(nota >= 0 && nota <= 10){
//         console.log(nota)
//         break;
//     }else{
//         console.log(nota + " Essa nota é inválida!")
//     }
// }


//03
// let nome = prompt("Digite o nome do usuário")
// let senha = prompt("Digite sua senha")
// while(nome == senha){
//     alert("Erro, senha" + senha + " não permitida. Tente novamente")
//     senha = prompt("Digite sua senha diferente do nome do usuário")
// }
// alert("senha cadastrada com sucesso!")


//04
// for(let i = 1; i<=20; i++){
//     console.log(i);
// }


//05
// let maior = 0;
// for(let i = 0; i< 5; i++){
//     let input = parseInt(prompt("Digite um valor"));
//     if (i === 0) {
//         maior = input;
//     }
//     if (input > maior){
//         maior = input;
//     }
// }
// alert(maior)


//06
// let soma = 0;
// for(i=0; i<5; i++){
//     let valor = parseInt(prompt("Digite o " + (i+1) + "º número de 5: "))
//     soma += valor
// }
// let media = soma/5
// alert(`Soma dos números: ${soma} Média: ${media}`)


//07
// for(i=1; i<=50; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

//08
// let numero = parseInt(prompt("Digite o número para ver sua tabuada"))
// for(i=1; i<=10; i++){
//     console.log(`${numero} x ${i} = ${numero*i}`)
// }


//FizzBuzz
// for(let i=0; i<=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 ==  0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }



//Exercícios Lista
//01
// let numero = [3, 5, 30, 15, 23]
// for(i=0; i<numero.length; i++){
//     console.log(numero[i])
// }


//02
// let numeros = [11.2, 12.3, 13.4, 14.5, 15.6, 16.7, 17.8, 18.9, 19.32, 20.46]
// for(i=numeros.length-1; i>=0; i--){
//     console.log(numeros[i])
// }


//03
// let notas = [9.2, 10, 10, 9.6]
// let soma = 0;
// for(i=0; i<notas.length; i++){
//     console.log(`${i+1}º Nota: ${notas[i]}`)
//     soma += notas[i]
// }
// console.log(`Média: ${soma/notas.length}`)


//04
// let caracteres = ["i", "n", "c", "i", "p", "i", "e", "n", "t", "e"]
// contador = 0;
// consoantes="";
// for(i=0; i<caracteres.length; i++){
//     if(caracteres[i] != "a" && caracteres[i] != "e" && caracteres[i] != "i"
//     && caracteres[i] != "o" && caracteres[i] != "u" ){
//         contador += 1
//         consoantes += caracteres[i] + " "
//     }
// }
// console.log(`Consoantes: ${consoantes}`)
// console.log(`Total de consoantes: ${contador}`)


//05
// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let showVetor = ""
// let par = []
// let showPar = ""
// let impar = []
// let showImpar = ""
// for(i=0; i<vetor.length; i++){
//     showVetor += vetor[i] + " "
//     if(vetor[i] % 2 == 0){
//         par.push(vetor[i])
//         showPar += vetor[i] + " "
//     }else{
//         impar.push(vetor[i])
//         showImpar += vetor[i] + " "
//     }
// }
// console.log(`Vetor completo: ${showVetor}`)
// console.log(`Vetor de Par: ${showPar}`)
// console.log(`Vetor de Impares: ${showImpar}`)
// console.log(vetor)
// console.log(par)
// console.log(impar)



//Exercícios Funções
//01
// function parImpar(num1){
//     let resultado
//     if(num1 % 2 == 0){
//         resultado = "Número Par"
//     }else{
//         resultado = "Número Impar"
//     }
//     return resultado
// }
// console.log(parImpar(10))


//02
// function soma(num1, num2){
//     console.log(parseInt(num1) + parseInt(num2))
// }
// soma(2, 8)


//03
// function oposto(num){
//     return inverter = num*-1
// }
// invertido = oposto(-10)
// console.log(invertido)


//04
// function somaPositivos(array){
//     let soma = 0;
//     for(i=0; i<array.length; i++){
//         if(array[i] >= 0 ){
//             soma+= array[i]
//         }
//     }
//     console.log(soma)
// }
// somaPositivos([1, -4, 7, 12])

