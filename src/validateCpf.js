import cpfWithSecondDigit from "./secondDigit.js"
import cpfWithoutDot from "./cpf.js"

let cpfFinal = ''
cpfWithSecondDigit.map((n) => {
  cpfFinal += n  
})

if (cpfFinal === cpfWithoutDot) {
  console.log(`CPF: ${cpfFinal} IS VALID`)
}
else {
  console.log(cpfFinal)
  console.log(`CPF dont match`)
}