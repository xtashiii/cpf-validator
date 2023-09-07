import ValidateCpf from "./cpf.constructor.js"

const cpf = new ValidateCpf('251.014.990-30');  // that is a random cpf generated by https://www.4devs.com.br/gerador_de_cpf
const cleanCpf = cpf.cleanCpf;

export default cleanCpf;
