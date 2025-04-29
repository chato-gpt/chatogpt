// Frases exibidas aleatoriamente no carregamento
const frasesDeCarregamento = [
  "Aquecendo os neurônios...",
  "Pegando referência no Wikipedia...",
  "Calculando pi até a vigésima casa...",
  "Consultando o oráculo da sabedoria...",
  "Falando com meu eu do futuro...",
  "Procurando no fundo da minha mente digital...",
  "Café detectado. Inteligência artificial energizada.",
  "Pensando... ou fingindo muito bem.",
  "Destravando a mente com CTRL+ALT+GPT...",
  "Rodando atualização de piadas ruins..."
];

window.onload = () => {
  const frase = frasesDeCarregamento[Math.floor(Math.random() * frasesDeCarregamento.length)];
  document.getElementById("loading-phrase").textContent = frase;
};

// Respostas aleatórias simuladas
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

function enviarPergunta() {
  const input = document.getElementById("pergunta");
  const pergunta = input.value.trim();
  const chat = document.getElementById("chat-container");

  if (pergunta === "") return;

  // Exibe a pergunta do usuário
  const perguntaDiv = document.createElement("div");
  perguntaDiv.className = "pergunta";
  perguntaDiv.textContent = pergunta;
  chat.appendChild(perguntaDiv);

  // Gera uma resposta aleatória
  const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];

  const respostaDiv = document.createElement("div");
  respostaDiv.className = "resposta";
  respostaDiv.textContent = respostaAleatoria;

  setTimeout(() => {
    chat.appendChild(respostaDiv);
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  // Limpa o campo
  input.value = "";
}
