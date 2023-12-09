//Aula de Javascript 2
//Tipos de variáveis e estruturas condicionais

//Padrões de nomenclatura de variáveis
//Camel case: para variáveis (primeira letra maiúscula a cada nova palavra, a primeira é totalmente minúscula)
//UPPERCASE: para constantes (todo nome da vairável é em letras maiúsculas)

//------------------------------------------------------


//Criação da variável
// let alunos; //Variável apenas declarada
let alunos = 12; //Variável declarada e valor atribuído
let escola;
escola = 'Digital College'; //É possível atribuir um valor depois da variável ter sido declarada
//Imprimir o conteúdo da variável
console.log(alunos); //Se o valor da variável não estiver definido, o retorno será undefined
console.log(escola); //Se a variável não for declarada, ocorre o erro abaixo
//Uncaught ReferenceError: escola is not defined

//------------------------------------------------------

//Tipos primitivos
let numero = 1; //Number: Variável para receber dados de tipo numérico
let palavras = 'palavra ou frase'; //String: Variável para receber palavra ou uma frase
let verdadeiro = true; //Boolean: Variável para receber um valor Verdadeiro ou Falso
let falso = false; //Boolean

//Tipos de listas (Arrays)
let arrayDeNumeros = [1, 2, 3, 4]; //Array: Variável para receber uma lista de valores. A primeira posição da lista (index) sempre começa em 0
let arrayDePalavras = ['segunda', 'terca', 'quarta']; //Array... Neste caso, é uma lista de valores do tipo texto (string)
let arrayDeBooleans = [true, false, true, true]; //Array... Neste caso, é uma lista de valores do tipo verdadeiro/falso (Boolean)

//Tipos complexos (Objetos)
// let aluno = {}; //Declaração de um objeto sem atribuir valor
let aluno = {
  nome: 'Fulano',
  idade: 15,
  genero: 'masculino',
  gostosMusicais: ['pagode gospel', 'samba gospel', 'forro... gospel']
};

const CONTANTE = 'valor que não muda'; //Const: Variável cujo valor não pode ser alterado após ser definido

//------------------------------------------------------

//Código fonte pra calculadora

//Obter os valores dos inputs - MODO 1
// let v1 = document.querySelector('#valor1').value;
// let v2 = document.querySelector('#valor2').value;

// console.log('Valor 1: ', v1);
// console.log('Valor 2: ', v2);

// let adicao = document.querySelector('#somar');
// adicao.addEventListener('click', function() {
  //   alert('cliquei');
  // })

//Obter os valores dos inputs - MODO 2
// somar.onclick = () => { //Utilizar o "somar" é como fazer uma referência direta a um ID de um objeto/tag do HTML
//   alert(valor1.value + valor2.value); //Nesse caso e no anterior, várias ações são permitidas na função
//   // valor1.value = '';
// };

//Obter os valores dos inputs - MODO 3
// somar.onclick = () => alert(valor1.value + valor2.value); //Nesse caso, a função é de uma única linha, se quisesse alguma ação a mais, precisaria usar um dos modos anteriores.
//Exemplo, se for necessário limpar o input após somar, esse modo não seria permitido

somar.onclick = () => {
  resultado.innerHTML = `O resultado é: ${Number(valor1.value) + Number(valor2.value)}`; //Template String utiliza ${} pra substituir dinamicamente o valor da variável ou de uma operação numa determinada String
  //O delimitador do Template String é uma crase (`), diferente das Strings padrão
  //Acionar a classe Number() permite instanciar automaticamente um objeto e já converter o valor para inteiro
  valor1.value = '';
  valor2.value = '';
};

subtrair.onclick = () => {
  resultado.innerHTML = `O resultado é: ${Number(valor1.value) - Number(valor2.value)}`; //Template String utiliza ${} pra substituir dinamicamente o valor da variável ou de uma operação numa determinada String
  //O delimitador do Template String é uma crase (`), diferente das Strings padrão
  //Acionar a classe Number() permite instanciar automaticamente um objeto e já converter o valor para inteiro
  valor1.value = '';
  valor2.value = '';
};

multiplicar.onclick = () => {
  resultado.innerHTML = `O resultado é: ${Number(valor1.value) * Number(valor2.value)}`; //Template String utiliza ${} pra substituir dinamicamente o valor da variável ou de uma operação numa determinada String
  //O delimitador do Template String é uma crase (`), diferente das Strings padrão
  //Acionar a classe Number() permite instanciar automaticamente um objeto e já converter o valor para inteiro
  valor1.value = '';
  valor2.value = '';
};

dividir.onclick = () => {
  if (Number(valor2.value) === 0) {
    resultado.innerHTML = 'Nenhum valor pode ser dividido por zero';
    return;
  }
  let result = Number(valor1.value) / Number(valor2.value);
  let restOfOperation = Number(valor1.value) % Number(valor2.value); //O operador % retorno o resto da divisão
  //Outra forma de identificar se uma divisão resulta em inteiro seria: Number.isInteger(result), o resultado é um Boolean
  let casasDecimais = 0;
  if (restOfOperation !== 0) {
    casasDecimais = 2;
  }
  resultado.innerHTML = `O resultado é: ${(result).toFixed(casasDecimais)}`; //Template String utiliza ${} pra substituir dinamicamente o valor da variável ou de uma operação numa determinada String
  //O delimitador do Template String é uma crase (`), diferente das Strings padrão
  //Acionar a classe Number() permite instanciar automaticamente um objeto e já converter o valor para inteiro
  valor1.value = '';
  valor2.value = '';
};
