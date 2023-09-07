import cleanCpf from './cpf.js';

let cpfChars = cleanCpf.split('');

let total = 0;
let count = 11;

cpfChars.pop(-1)
cpfChars.pop(-1)

const cpfMultiplied = []

cpfChars.forEach((n) => {
  count -= 1;
  cpfMultiplied.push(Number(n) * count)
})

for (let i = 0; i < cpfMultiplied.length; i++) {
  total += cpfMultiplied[i];
}
const firstDigit = 11 - (total % 11)
cpfChars.push(String(firstDigit))

const cpfWithFirstDigit = [...cpfChars]

export default cpfWithFirstDigit
