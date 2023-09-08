function ValidateCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    get: function() {
      return cpf.replace(/\D+/g, '');
    }
  })
};

ValidateCpf.prototype.isSequence = function() {
  const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
  return sequence === this.cleanCpf;
}

export default ValidateCpf;