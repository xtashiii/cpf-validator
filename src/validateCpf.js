import cpf from "./cpf.js";
import cpfWithSecondDigit from "./secondDigit.js";

let finalCpf = '';

cpfWithSecondDigit.map((n) => {
  finalCpf += n;
});

if (cpf.isSequence()) {
  console.log('[CPF INVALIDO] pois é uma sequencia');
}
else {
  finalCpf === cpf.cleanCpf ? console.log(`CPF: ${finalCpf}\n[É VALIDO]`) : console.log('[CPF INVALIDO]');
}