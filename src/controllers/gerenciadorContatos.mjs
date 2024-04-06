export class GerenciadorContato {
  constructor() {
    this.listaContatos = [];
  }

  setListaContatos(contato) {
    if (contato) {
      this.listaContatos.push(contato);
      console.log("Contato " + contato.nome + " adicionado com sucesso");
    } else {
      console.log("Erro: Formato de contato invalido");
    }
  }

  getListaContatos() {
    return console.log(this.listaContatos.map((e) => e));
  }

  removeFromListaContatos(nome) {
    if (nome) {
      this.listaContatos = this.listaContatos.filter(
        (contato) => contato.nome !== nome
      );
      console.log("Contato " + nome + " deletado com sucesso");
    } else {
      console.log("Erro: Formato de nome invalido");
    }
  }

  searchFromListaContatos(nome) {
    if (nome) {
      console.log(
        "Contato encontrado: \n",
        this.listaContatos.find((contato) => contato.nome === nome)
      );
    } else {
      console.log("Erro: Formato de nome invalido");
    }
  }
}
