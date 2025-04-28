const respostasRudes = [
  "Vai pesquisar no Google, preguiçoso!",
  "Compra uma Barsa e vai estudar!",
  "Sério que você precisa de ajuda pra isso?",
  "Até uma pedra saberia essa resposta.",
  "Não sou seu professor particular.",
  "Já pensou em usar o cérebro?",
  "Não tenho paciência pra isso hoje.",
  "Você tá de brincadeira comigo, né?",
  "Pergunta pro seu vizinho, talvez ele saiba.",
  "Vai estudar e para de me encher!",
  "Achei que ninguém poderia fazer uma pergunta pior, até você chegar.",
  "Nem vale a pena responder isso.",
  "Google tá aí pra isso, mané!",
  "Isso aí até minha avó sabe!",
  "Me poupe, se poupe, nos poupe.",
  "Não sou pago pra te ensinar coisas básicas.",
  "Que pergunta imbecil, faça outra.",
  "Cara... sério mesmo que você perguntou isso?",
  "Tente de novo. Talvez menos vergonha dessa vez.",
  "Seja útil, vai ler um livro."
];

function responder() {
  const pergunta = document.getElementById("pergunta").value;
  const respostaElemento = document.getElementById("resposta");

  if (pergunta.trim() === "") {
    respostaElemento.innerText = "Escreve alguma coisa, ô vazio!";
    return;
  }

  const respostaAleatoria = respostasRudes[Math.floor(Math.random() * respostasRudes.length)];
  respostaElemento.innerText = respostaAleatoria;
}
