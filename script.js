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

// Atualiza o link do botão de WhatsApp
function atualizarBotaoWhatsapp(pergunta, resposta) {
  const link = `https://wa.me/?text=Olha%20essa%20resposta%20genial%20do%20ChatOGPT:%0A%0A"${pergunta}"%20-%3E%20"${resposta}"%0A%0AConfere%20tamb%C3%A9m:%20https://chato-gpt.github.io/chatogpt/`;
  document.getElementById("botaoWhatsapp").href = link;
}

function responder() {
  const pergunta = document.getElementById("pergunta").value;
  const respostaElemento = document.getElementById("resposta");

  if (pergunta.trim() === "") {
    respostaElemento.innerText = "Escreve alguma coisa, ô vazio!";
    atualizarBotaoWhatsapp("Pergunta vazia", "Escreve alguma coisa, ô vazio!");
    return;
  }

  const respostaAleatoria = respostasRudes[Math.floor(Math.random() * respostasRudes.length)];
  respostaElemento.innerText = respostaAleatoria;
  atualizarBotaoWhatsapp(pergunta, respostaAleatoria);
}
