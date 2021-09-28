// VARIÁVEIS (recebem valor)

// let (var, forma mais antiga) -> tipo da variável
// idade -> nome da variável
// 5 -> valor da variável idade
let idade = 5
let altura = 168

// Para ver essa variável na tela/ passe como parâmetro a variável idade
console.log(idade)
console.log(altura)

// Maneiras de nomear uma variável (camelCase):
let nomeCompleto
let nome = 'Douglas'

// caseSensitive veja que a variável foi escriva com letra minúscula se eu chamar no console com letra maiúscula ele vai dar Error
console.log(Nome)

// pode ser definido varias variáveis de uma vez só
let nome, idade, altura

// O let permite que vc redefina constantemente o valor da variável
let valorIngressoAdulto = 20
valorIngressoAdulto = 30
console.log(valorIngressoAdulto)

// CONSTANTES

// Constantes não pode mudar o valor da variável é sempre fixo no primeiro valor que vc definiu
const valorIngressoAdulto = 20
console.log(valorIngressoAdulto)

// TIPOS PRIMITIVOS

// Tipos primitivos de valores: String / Number / Boolean / undefined / null
let nome = 'Douglas' //string literal (string quando você junta várias letras e armazena isso em uma variável)
let idade = 27 //number literal
let estaAprovado = true //boolean
let sobrenome = undefined //undefined
let corSelecionado = null //redefinir um valor


// Realizar uma tarefa, não devolve nada
function dizernome() {
  console.log('Douglas')
}

//TIPAGEM DINÂMICA
typeof nome
nome = 5
typeof nome
typeof idade

/* Tipos primitivos de referência: OBJETOS / ARRAYS / FUNCTIONS */

// OBJETOS
// juntar informações em um lugar só que vc pode acessar pela propriedade daquele objeto
let nome = 'Douglas'
let idade = 27 
let estaAprovado = true 
let sobrenome = undefined
let corSelecionado = null

let pessoa = {
   nome = 'Douglas', //nome seria a chave e Douglas seria valor
   idade = 27,
   estaAprovado = True,
   sobreNome = "Oliveira
};


console.log(pessoa);

// Arrays

Let familia [true, 45, 50, 'Douglas'];
console.log(familia.length);
console.log(familia[3]);

dizernome()
// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
  return valor * 2
}

// console.log(MultiplicarPorDois(5))

let resultado = MultiplicarPorDois(5)

console.log(resultado)

if else ifelse 
