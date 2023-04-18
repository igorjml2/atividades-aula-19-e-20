
// variável para armazenar um nome pessoal
const nome = "igor lima";

// variáveis para armazenar números
const numero1 = 5;
const numero2 = 10;

// função para subtrair dois números
function subtracao(numero1, numero2) {
  if (numero1 < numero2) {
    return "Não foi possível subtrair";
  }
  return numero1 - numero2;
}

// função para dividir dois números
function divisao(numero1, numero2) {
  if (numero2 <= 0) {
    return "Não foi possível dividir";
  }
  return numero1 / numero2;
}

// variável para armazenar a soma dos números
const soma = numero1 + numero2;

// variável para armazenar a multiplicação dos números
const multiplicacao = numero1 * numero2;

// variável para armazenar a subtração dos números
const subtracao_resultado = subtracao(numero1, numero2);

// variável para armazenar a divisão dos números
const divisao_resultado = divisao(numero1, numero2);

// exibindo os resultados no console
console.log("O nome é " + nome);
console.log("A soma é " + soma);a
console.log("A multiplicação é " + multiplicacao);
console.log("A subtração é " + subtracao_resultado);
console.log("A divisão é " + divisao_resultado);

