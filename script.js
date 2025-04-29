// Frases de carregamento aleatórias
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

window.onload = () => {
  // Exibe frase de carregamento
  const loading = document.getElementById("loading-text");
  loading.innerText = frasesDeCarregamento[
    Math.floor(Math.random() * frasesDeCarregamento.length)
  ];
};

document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("pergunta");
  const texto = input.value.trim();
  const chat = document.getElementById("chat-container");
  const loading = document.getElementById("loading-text");

  if (!texto) return;

  // Mensagem do usuário
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = texto;
  chat.appendChild(userDiv);
  chat.scrollTop = chat.scrollHeight;

  // “Pensando...”
  loading.innerText = "🤖 Pensando...";

  // Simula tempo de geração
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText =
      respostas[Math.floor(Math.random() * respostas.length)];
    chat.appendChild(botDiv);
    chat.scrollTop = chat.scrollHeight;
    loading.innerText = ""; // limpa a frase
  }, 800);

  input.value = "";
});
