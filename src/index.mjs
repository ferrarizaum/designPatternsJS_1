import { Contato } from "./controllers/contato.mjs";
import { GerenciadorContato } from "./controllers/gerenciadorContatos.mjs";

const testaContato = new Contato();
const testaContato2 = new Contato();

testaContato.setNome("Jose Ferrari");
testaContato.setEmail("joseferrari@email.com");
testaContato.setTelefone("43991250895");

testaContato2.setNome("teste");
testaContato2.setEmail("teste@email.com");
testaContato2.setTelefone("12345678");

const testaListaContatos = new GerenciadorContato();

testaListaContatos.setListaContatos(testaContato);
testaListaContatos.setListaContatos(testaContato2);

console.log(testaContato.getNome());
console.log(testaContato.getEmail());
console.log(testaContato.getTelefone());

console.log("\n");

console.log(testaListaContatos.getListaContatos());
