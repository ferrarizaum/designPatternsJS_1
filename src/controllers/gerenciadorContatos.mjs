export class GerenciadorContato {
  constructor() {
    this.listaContatos = [];
    this.searchStrategy = null;
  }

  setListaContatos(contato) {
    if (contato) {
      this.listaContatos.push(contato);
      console.log("Contato " + contato.nome + " adicionado com sucesso");
    } else {
      console.log("Erro: Formato de contato invalido");
    }
  }

  setSearchStrategy(strategy) {
    this.searchStrategy = strategy;
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

  searchFromListaContatos(criteria) {
    if (this.searchStrategy) {
      const results = this.searchStrategy.search(this.listaContatos, criteria);
      if (results && results.length > 0) {
        console.log("Contatos encontrados:");
        results.forEach((contato) => console.log(contato));
      } else {
        console.log("Nenhum contato encontrado com o criterio fornecido.");
      }
    } else {
      console.log("Busca ainda nao definida defina o tipo de busca.");
    }
  }
}
