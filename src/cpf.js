let inputCpf = '335.515.330-32'; // that is a random cpf generated by https://www.4devs.com.br/gerador_de_cpf
const cpfWithoutDot = inputCpf.replace(/\D+/g, '');

export default cpfWithoutDot;