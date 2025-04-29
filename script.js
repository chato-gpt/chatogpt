// debug de erros
window.onerror = (msg, url, line, col, error) => {
  console.error(`Error: ${msg} em ${url}:${line}:${col}`, error);
};

const frasesDeCarregamento = [
  "Carregando ideias malucas...",
  "Conectando hemisférios...",
  "Pensando como um gênio...",
  "Formatando respostas...",
  "Consultando o oráculo digital..."
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

const respostas = [
  /* ... seu array grande de respostas ... */
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  // adicione suas 200+ respostas aqui!
];

function init() {
  // loading
  const loadingEl = document.getElementById("loading-text");
  loadingEl.innerText =
    frasesDeCarregamento[
      Math.floor(Math.random() * frasesDeCarregamento.length)
    ];

  // enviar
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleSend);

  // whatsapp share
  document
    .getElementById("whatsapp-btn")
    ?.addEventListener("click", shareWhatsApp);
}

function handleSend() {
  const inputEl = document.getElementById("pergunta");
  const texto = inputEl.value.trim();
  const chatEl = document.getElementById("chat-container");
  const loadingEl = document.getElementById("loading-text");

  if (!texto) return;

  // usuário
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = texto;
  chatEl.appendChild(userDiv);
  chatEl.scrollTop = chatEl.scrollHeight;

  // pensando...
  loadingEl.innerText = "🤖 Pensando...";

  setTimeout(() => {
    // bot
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText =
      respostas[Math.floor(Math.random() * respostas.length)];
    chatEl.appendChild(botDiv);
    chatEl.scrollTop = chatEl.scrollHeight;
    loadingEl.innerText = "";
  }, 800);

  inputEl.value = "";
}

function shareWhatsApp() {
  const url = window.location.href;
  const text = encodeURIComponent(
    `Dá uma olhada neste Chat-O-GPT e garanta boas risadas: ${url}`
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}

document.addEventListener("DOMContentLoaded", init);
