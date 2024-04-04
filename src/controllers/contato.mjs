export class Contato {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

  setNome(nome) {
    if (nome) {
      this.nome = nome;
    } else {
      console.log("Erro: Formato de nome invalido");
    }
  }
  getNome() {
    return this.nome;
  }

  setEmail(email) {
    if (email) {
      this.email = email;
    } else {
      console.log("Erro: Formato de email invalido");
    }
  }
  getEmail() {
    return this.email;
  }

  setTelefone(telefone) {
    if (telefone) {
      this.telefone = telefone;
    } else {
      console.log("Erro: Formato de telefone invalido");
    }
  }
  getTelefone() {
    return this.telefone;
  }
}
