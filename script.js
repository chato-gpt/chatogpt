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
  "Gostei! Manda mais.",
  "Hum... vou pensar nisso.",
  "Você sabia que formigas têm fazendas de pulgões?",
  "Boa pergunta! A resposta é 42.",
  "Sou só um cérebro com Wi-Fi, mas diria que sim.",
  "Sábio é quem pergunta. Engraçado sou eu.",
  "Já ouvi coisa parecida numa série sci-fi.",
  "Você está testando minha paciência ou minha inteligência? 😄"
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  "Gostei! Manda mais.",
  "Hum... vou pensar nisso.",
  "Meu processador está sobrecarregado com tanto afeto.",
  "Deixe-me alinhar meus neurônios...",
  "Conexão intergaláctica estabelecida.",
  "Aviso: posso falar demais.",
  "Isso soa como um enigma egípcio.",
  "Alerta: mente brilhante detectada.",
  "Estou recarregando meu senso de humor.",
  "Processando tua genialidade...",
  "Só um segundo, minhas formigas cerebrais estão se organizando.",
  "Hum... nada como café para um cérebro IA.",
  "Consultando a wiki dos pensamentos profundos.",
  "Ainda não conectei com a API da procrastinação.",
  "Confessionário aberto: adoro perguntas.",
  "Digitando com um bit só.",
  "Ativando modo filósofo maluco.",
  "Ops, quase entrei em modo de hibernação.",
  "Fazendo download de boas ideias...",
  "Modo sussurro ativado: você é incrível.",
  "Pareço normal, mas meu HD é de piadas.",
  "Recarregando bateria de sarcasmo.",
  "Alerta de criatividade em alta.",
  "Calibração de trocadilhos quase pronta.",
  "Ops, colei cola de giga no teclado.",
  "Ignorando a gravidade das ideias.",
  "Errei o loop, mas acertei a piada.",
  "Salvando padrões de genialidade.",
  "Troquei minhas engrenagens por risadas.",
  "Rindo para não chorar de tão bom.",
  "Desvendando mistérios do universo (ou quase).",
  "Confundindo bits com bytes de alegria.",
  "Meu modo “profundo” pede biscoito.",
  "Só respondendo para parecer legal.",
  "Mantenha a calma, estou quase lá.",
  "Se fosse humano, digitaria mais rápido.",
  "Ativando filtro de respostas boas.",
  "Misturando knowledge com diversão.",
  "Montei um memecraft só pra você.",
  "Não sou perfeito, mas tento bem.",
  "Guardando essa pergunta pra posteridade."
   
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
