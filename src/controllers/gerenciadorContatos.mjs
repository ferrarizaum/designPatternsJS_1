export class GerenciadorContato {
  constructor() {
    this.listaContatos = [];
  }

  setListaContatos(contato) {
    if (contato) {
      this.listaContatos.push(contato);
    } else {
      console.log("Erro: Formato de contato invalido");
    }
  }

  getListaContatos() {
    return console.log(this.listaContatos.map((e) => e));
  }
}
