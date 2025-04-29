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
