import { Contato } from "../models/contato.mjs";
import { GerenciadorContato } from "./gerenciadorContatos.mjs";

export class FacadeContato {
  constructor() {
    this.gerenciadorContatos = new GerenciadorContato();
  }

  setListaContatos(nome, email, telefone) {
    const contato = new Contato(nome, email, telefone);
    this.gerenciadorContatos.setListaContatos(contato);
  }

  getListaContatos() {
    this.gerenciadorContatos.getListaContatos();
  }

  getContatoFromListaContatos(nome) {
    this.gerenciadorContatos.searchFromListaContatos(nome);
  }

  removeContatoFromListaContatos(nome) {
    this.gerenciadorContatos.removeFromListaContatos(nome);
  }
}
