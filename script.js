// script.js

// Captura erros no console para facilitar depuração
window.onerror = (msg, url, line, col, error) => {
  console.error(`Error: ${msg} em ${url}:${line}:${col}`, error);
};

// Frases de carregamento
const frasesDeCarregamento = [
  "Carregando ideias malucas...",
  "Conectando hemisférios...",
  "Pensando como um gênio...",
  "Formatando respostas...",
  "Consultando o oráculo digital...",
  "Esperando o Wi-Fi do vizinho colaborar...",
  "Falando com um pombo-correio mental..."
];

// Seu roll de respostas (adicione as 200+ aqui)
const respostas = [
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  "Você acordou hoje e escolheu confundir, né?",
  "Essa pergunta merece um prêmio de esquisitice!",
  "Só um minuto que vou consultar os deuses do nonsense...",
  "Não tenho certeza se isso foi uma pergunta ou um poema moderno.",
  "Se essa pergunta fosse um prato, seria miojo gourmet: simples, mas ousado!",
  "Eu responderia, mas estou ocupado demais rindo dessa pergunta.",
  "Isso aí é pra responder ou só pra admirar?",
  "Que loucura... responde você agora!",
  "Se eu tivesse um real pra cada pergunta estranha... teria uns 3 reais agora.",
  "Hmmm... deixa eu pensar... não, continua sem sentido mesmo.",
  "Olha, até o HAL 9000 ficou confuso com isso aí.",
  "Resposta: sim, não, talvez. Próxima?",
  "Você é pago pra fazer essas perguntas ou é só dom natural?",
  "Essa foi tão boa que quase fechei o navegador.",
  "Você treinou isso ou veio no instinto mesmo?",
  "Resposta: chame um adulto responsável.",
  "Tenho vergonha de admitir que entendi.",
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  "Gostei! Manda mais.",
  "Hum... vou pensar nisso.",
  "Você sabia que formigas têm fazendas de pulgões?",
  "Boa pergunta! A resposta é 42.",
  "Sou só um cérebro com Wi-Fi, mas diria que sim.",
  "Sábio é quem pergunta. Engraçado sou eu.",
  "Já ouvi coisa parecida numa série sci-fi.",
  "Você está testando minha paciência ou minha inteligência?"
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
  // ...adicione o restante de suas respostas aqui...
];

// Inicializa controles após o DOM carregar
function init() {
  // Exibe frase de carregamento aleatória
  const loadingEl = document.getElementById("loading-text");
  loadingEl.innerText =
    frasesDeCarregamento[
      Math.floor(Math.random() * frasesDeCarregamento.length)
    ];

  // Evento do botão Enviar
  const sendBtn = document.getElementById("send-btn");
  sendBtn.addEventListener("click", handleSend);

  // Evento do botão WhatsApp
  const whatsappBtn = document.getElementById("whatsapp-btn");
  whatsappBtn.addEventListener("click", shareWhatsApp);
}

// Lógica de envio e resposta
function handleSend() {
  const inputEl = document.getElementById("pergunta");
  const texto = inputEl.value.trim();
  const chatEl = document.getElementById("chat-container");
  const loadingEl = document.getElementById("loading-text");

  if (!texto) return;

  // Adiciona mensagem do usuário
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = texto;
  chatEl.appendChild(userDiv);
  chatEl.scrollTop = chatEl.scrollHeight;

  // Mostra "pensando..."
  loadingEl.innerText = "🤖 Pensando...";

  // Simula tempo de resposta
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText =
      respostas[Math.floor(Math.random() * respostas.length)];
    chatEl.appendChild(botDiv);
    chatEl.scrollTop = chatEl.scrollHeight;

    // Limpa texto de loading
    loadingEl.innerText = "";
  }, 800);

  inputEl.value = "";
}

// Abre WhatsApp com mensagem pronta
function shareWhatsApp() {
  const url = window.location.href;
  const text = encodeURIComponent(
    `Dá uma olhada nesse Chat-O-GPT hilário e garante boas risadas: ${url}`
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}

// Configura tudo quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", init);
