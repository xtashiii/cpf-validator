import cleanCpf from "./cpf.js";
import cpfWithSecondDigit from "./secondDigit.js";

let finalCpf = ''

cpfWithSecondDigit.map((n) => {
  finalCpf += n
});

if (finalCpf === cleanCpf)
{
  console.log(`CPF: ${finalCpf} valido`);
}
else
{
  console.log('CPF invalido');
}
