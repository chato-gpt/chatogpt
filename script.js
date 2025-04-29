
const frasesDeCarregamento = [
  "Carregando ideias malucas...",
  "Conectando hemisférios cerebrais...",
  "Buscando sabedoria nos confins da internet...",
  "Consultando um sábio monge digital...",
  "Esperando o Wi-Fi do vizinho colaborar..."
];

const respostas = [
  "Essa pergunta me ofendeu emocionalmente.",
  "Vou fingir que não vi essa pergunta.",
  "Já ouvi perguntas melhores de uma torradeira.",
  "Resposta: 42. Não pergunte mais nada.",
  "Meu processador travou de vergonha alheia.",
  "Você é pago pra isso?",
  "Sério mesmo que você digitou isso?",
  "Prefiro responder um captcha do que isso.",
  "Gostei! Manda mais.",
  "Isso foi uma pergunta ou um poema moderno?"
];

function init() {
  const loadingText = document.getElementById("loading-text");
  if (loadingText) {
    loadingText.innerText =
      frasesDeCarregamento[Math.floor(Math.random() * frasesDeCarregamento.length)];
  }

  document.getElementById("send-btn").addEventListener("click", handleSend);
  document.getElementById("pergunta").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  });

  document.getElementById("whatsapp-btn").addEventListener("click", shareWhatsApp);
}

function handleSend() {
  const input = document.getElementById("pergunta");
  const texto = input.value.trim();
  const chat = document.getElementById("chat-container");

  if (!texto) return;

  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = texto;
  chat.appendChild(userDiv);
  chat.scrollTop = chat.scrollHeight;

  document.getElementById("loading-text").innerText = "Pensando como um gênio preguiçoso...";

  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText = respostas[Math.floor(Math.random() * respostas.length)];
    chat.appendChild(botDiv);
    chat.scrollTop = chat.scrollHeight;
    document.getElementById("loading-text").innerText = "";
  }, 800);

  input.value = "";
}

function shareWhatsApp() {
  const url = window.location.href;
  const text = encodeURIComponent(
    `Encontrei esse site hilário: Chat-O-GPT 🤯💬\nMande sua pergunta e se prepare pra uma resposta nonsense!\n👉 ${url}`
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}

document.addEventListener("DOMContentLoaded", init);
