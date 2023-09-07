function ValidateCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    get: function() {
      return cpf.replace(/\D+/g, '');
    }
  });
};

export default ValidateCpf;
