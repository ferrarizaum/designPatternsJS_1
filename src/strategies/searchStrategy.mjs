class SearchStrategy {
  search(contacts, criteria) {
    console.log("Procura ainda nao implementada");
  }
}

export class SearchByName extends SearchStrategy {
  search(contacts, criteria) {
    return contacts.filter((contact) => contact.nome === criteria);
  }
}

export class SearchByEmail extends SearchStrategy {
  search(contacts, criteria) {
    return contacts.filter((contact) => contact.email === criteria);
  }
}

export class SearchByTelefone extends SearchStrategy {
  search(contacts, criteria) {
    return contacts.filter((contact) => contact.telefone === criteria);
  }
}
