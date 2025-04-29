const frases = [
  "Carregando ideias malucas...",
  "Conectando com o cérebro alienígena...",
  "Formatando respostas engraçadas...",
  "Digitando com um dedo só...",
  "Pensando fora da caixa... e dentro também.",
  "Consultando o oráculo digital..."
];

window.onload = () => {
  const texto = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("loading-text").innerText = texto;
};

function handleSend() {
  const input = document.getElementById("user-input").value.trim();
  const responseBox = document.getElementById("response");

  if (!input) {
    responseBox.innerText = "Digite algo para começar.";
    return;
  }

  // Resposta simulada
  responseBox.innerText = "🤖 Pensando...";

  setTimeout(() => {
    responseBox.innerText = `Você perguntou: "${input}"\n\nResposta gerada automaticamente: ainda não conectamos com uma IA real. 😉`;
  }, 1000);
}
