import { FacadeContato } from "./facadeContato.mjs";

const facadeContato = new FacadeContato();

facadeContato.setListaContatos("jose", "jose@email.com", "12345678");
facadeContato.setListaContatos("maria", "maria@email.com", "12345678");
facadeContato.setListaContatos("joao", "joao@email.com", "12345678");
facadeContato.getListaContatos();
facadeContato.removeContatoFromListaContatos("joao");
facadeContato.getListaContatos();
//facadeContato.getContatoFromListaContatos("jose");
//facadeContato.getListaContatos();
