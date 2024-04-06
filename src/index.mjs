import { FacadeContato } from "./facadeContato.mjs";
import readline from "readline";

const facadeContato = new FacadeContato();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addContato() {
  rl.question("Digite o nome do Contato: ", (nome) => {
    rl.question("Digite o email do Contato: ", (email) => {
      rl.question("Digite o telefone do Contato: ", (telefone) => {
        facadeContato.setListaContatos(nome, email, telefone);
        menu();
      });
    });
  });
}

function removerContato() {
  rl.question("Digite o nome do contato a ser removido: ", (nome) => {
    facadeContato.removeContatoFromListaContatos(nome);
    menu();
  });
}

function procuraContato() {
  rl.question("Digite o nome do contato a ser procurado: ", (nome) => {
    facadeContato.getContatoFromListaContatos(nome);
    menu();
  });
}

function getListaContatos() {
  facadeContato.getListaContatos();
  menu();
}

function menu() {
  rl.question(
    "Escolha uma opcao: \n 1-Add Contato\n 2-Listar Contatos\n 3-Remover Contato\n 4-Procurar Contato\n 5-Sair\n",
    (option) => {
      switch (option) {
        case "1":
          addContato();
          break;
        case "2":
          getListaContatos();
          break;
        case "3":
          removerContato();
          break;
        case "4":
          procuraContato();
          break;
        case "5":
          rl.close();
          break;
        default:
          console.log("Opcao Invalida, voltando para o menu");
          menu();
      }
    }
  );
}

menu();
