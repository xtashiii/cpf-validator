import cpfWithFirstDigit from "./firstDigit.js";

let total = 0;
let count = 12;

const cpfMultiplied2 = [];
cpfWithFirstDigit.forEach((n) => {
  count -= 1;
  cpfMultiplied2.push(Number(n) * count);
})

for (let i = 0; i < cpfMultiplied2.length; i++) {
  total += cpfMultiplied2[i];
}

let secondDigit = 11 - (total % 11);

if (secondDigit > 9) {
  secondDigit = 0;
}

const cpfWithSecondDigit = [...cpfWithFirstDigit];
cpfWithSecondDigit.push(String(secondDigit));

export default cpfWithSecondDigit;