import { Contato } from "./controllers/contato.mjs";
import { GerenciadorContato } from "./controllers/gerenciadorContatos.mjs";

const testaContato = new Contato();

testaContato.setNome("Jose Ferrari");
testaContato.setEmail("joseferrari@email.com");
testaContato.setTelefone("43991250895");

const testaListaContatos = new GerenciadorContato();

testaListaContatos.setListaContatos(contato);

console.log(testaListaContatos.getListaContatos());
