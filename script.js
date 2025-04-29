// Para depurar: exibe erros no console caso algo falhe
window.onerror = (msg, url, line, col, error) => {
  console.error(`Error: ${msg} at ${url}:${line}:${col}`, error);
};

const frasesDeCarregamento = [
  "Carregando ideias malucas...",
  "Conectando hemisférios...",
  "Pensando como um gênio...",
  "Formatando respostas...",
  "Consultando o oráculo digital..."
];

const respostas = [
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  "Gostei! Manda mais.",
  "Hum... vou pensar nisso.",
  "Você sabia que formigas têm fazendas de pulgões?",
  "Boa pergunta! A resposta é 42.",
  "Sou só um cérebro com Wi-Fi, mas diria que sim.",
  "Sábio é quem pergunta. Engraçado sou eu.",
  "Já ouvi coisa parecida numa série sci-fi.",
  "Você está testando minha paciência ou minha inteligência? 😄"
];

function init() {
  const loadingEl = document.getElementById("loading-text");
  loadingEl.innerText = frasesDeCarregamento[
    Math.floor(Math.random() * frasesDeCarregamento.length)
  ];

  const sendBtn = document.getElementById("send-btn");
  if (!sendBtn) {
    console.error("Botão de enviar não encontrado (id 'send-btn').");
    return;
  }
  sendBtn.addEventListener("click", handleSend);
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

  // “Pensando...”
  loadingEl.innerText = "🤖 Pensando...";

  // resposta simulada
  setTimeout(() => {
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

document.addEventListener("DOMContentLoaded", init);
