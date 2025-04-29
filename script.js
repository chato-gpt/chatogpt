const frasesDeCarregamento = [
  "Carregando ideias malucas...",
  "Conectando hemisférios cerebrais...",
  "Buscando sabedoria nos confins da internet...",
  "Consultando um sábio monge digital...",
  "Pedindo ajuda para o estagiário virtual...",
  "Esperando o Wi-Fi do vizinho colaborar...",
  "Usando força bruta e memes para pensar...",
  "Trocando o disquete da sabedoria...",
  "Imaginando uma resposta digna de Oscar...",
  "Apertando todos os botões e torcendo..."
];

const respostas = [
  "Você quer mesmo saber isso?",
  "Essa pergunta me ofendeu emocionalmente.",
  "Vou fingir que não vi essa pergunta.",
  "Você está bem? Porque essa pergunta não tá.",
  "Nem sua mãe acreditaria nessa dúvida.",
  "Essa foi boa... boa pra ser ignorada!",
  "Hmmm, interessante. Não.",
  "Já considerou pesquisar no Orkut?",
  "Se eu tivesse um neurônio físico, ele teria saído da sala agora.",
  "Meu processador travou de vergonha alheia.",
  "Você é pago pra isso?",
  "Isso foi uma pergunta ou um poema moderno?",
  "Sua dúvida é como Wi-Fi ruim: não faz sentido e só irrita.",
  "Eu ia responder, mas preferi preservar minha dignidade artificial.",
  "Essa eu deixo pro Google.",
  "Já ouvi perguntas melhores de uma torradeira.",
  "Essa me fez reavaliar minha existência virtual.",
  "Prefiro responder um captcha do que isso.",
  "Tenho medo da resposta que você quer.",
  "Resposta: 42. Não pergunte mais nada.",
  "Essa pergunta me pegou de surpresa!",
  "Interessante... muito interessante!",
  "Gostei! Manda mais.",
  "Hum... vou pensar nisso.",
  "Você sabia que formigas têm fazendas de pulgões?",
  "Boa pergunta! A resposta é 42.",
  "Sou só um cérebro com Wi-Fi, mas diria que sim.",
  "Sábio é quem pergunta. Engraçado sou eu.",
  "Já ouvi coisa parecida numa série sci-fi.",
  "Você está testando minha paciência ou minha inteligência? 😄",
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
  const loadingText = document.getElementById("loading-text");
  if (loadingText) {
    loadingText.innerText =
      frasesDeCarregamento[Math.floor(Math.random() * frasesDeCarregamento.length)];
  }

  const sendBtn = document.getElementById("send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", handleSend);
  }

  const input = document.getElementById("pergunta");
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  const shareBtn = document.getElementById("whatsapp-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", shareWhatsApp);
  }
}

function handleSend() {
  const input = document.getElementById("pergunta");
  const texto = input.value.trim();
  const chat = document.getElementById("chat-container");
  const loading = document.getElementById("loading-text");

  if (!texto) return;

  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = texto;
  chat.appendChild(userDiv);
  chat.scrollTop = chat.scrollHeight;

  if (loading) loading.innerText = "Pensando como um gênio preguiçoso...";

  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText =
      respostas[Math.floor(Math.random() * respostas.length)];
    chat.appendChild(botDiv);
    chat.scrollTop = chat.scrollHeight;

    if (loading) loading.innerText = "";
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
