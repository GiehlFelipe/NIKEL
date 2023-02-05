const nome = "Felipe Giehl";
let nome2 = "Felipe Giehl";
let pessoaDefault = {
  nome: "Felipe Giehl",
  idade: "22",
  trabalho: "programador",
};
let nomes = ["Felipe", "Angelixa", "Paulo"];
let pessoas = [
  {
    nome: "Felipe Giehl",
    idade: "22",
    trabalho: "programador",
  },
  {
    nome: "Angelica",
    idade: "89",
    trabalho: "Vagabunda",
  },
];

function alterarNome() {
  nome2 = "Angelica";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log("Nome:");
  console.log(pessoa.nome);

  console.log("Idade:");
  console.log(pessoa.idade);

  console.log("Trabalho:");
  console.log(pessoa.trabalho);
}

function adicionarPessoas(pessoa) {
  pessoas.push(pessoa);
}

adicionarPessoas[
  {
    nome: "Pedro silve",
    idade: "28",
    trabalho: "porteiro",
  }
];

console.log(pessoas);

//console.log(nomes[0]);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
// nome: "Felipe Giesdasdhl",
// idade: "252",
// trabalho: "programaasdasdador",
//});

//recebeEAlteraNome("Marcelo gordo");
//recebeEAlteraNome("FELIPE DLÇ");
//alterarNome();
