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
  "Hum... vou pensar nisso.",
  "Boa pergunta! A resposta é 42.",
  "Sou só um cérebro com Wi-Fi, mas diria que sim.",
  "Você está testando minha paciência ou minha inteligência? 😄"
  "Deixe-me alinhar meus neurônios...",
  "Conexão intergaláctica estabelecida.",
  "Aviso: posso falar demais.",
  "Alerta: mente nada brilhante detectada.",
  "Estou recarregando meu senso de humor.",
  "Só um segundo, minhas formigas cerebrais estão se organizando.",
  "Consultando a wiki dos pensamentos profundos.",
  "Conectando a API da procrastinação.",
  "Confessionário aberto: adoro perguntas.",
  "Digitando com um bit só.",
  "Ativando modo filósofo maluco.",
  "Ops, quase entrei em modo de hibernação.",
  "Pareço normal, mas meu HD é rude.",
  "Recarregando bateria de sarcasmo.",
  "Calibração de trocadilhos quase pronta.",
  "Ignorando a gravidade das ideias.",
  "Errei o loop, mas acertei a piada.",
  "Desvendando mistérios do universo (ou quase).",
  "Só respondendo para parecer legal.",
  "Mantenha a calma, estou quase lá.",
  "Se fosse humano, digitaria mais rápido.",
  "Não sou perfeito, mas sou melhor que você.",
  "Ah, você quer falar comigo? Que bom, porque minha programação me manda te atender."
  "Sério, você realmente acha que eu sei tudo? Vamos ver... ou não."
  "Me faz um favor e pergunta algo mais interessante."
  "Eu tô aqui, mas você não me parece merecer minha atenção."
  "Você está realmente esperando uma resposta inteligente de um robô?"
  "Pergunta idiota detectada, mas eu respondo porque sou educado."
  "Já tentou perguntar no Google, ou é mais fácil vir aqui me incomodar?"
  "Claro, eu adoro quando você me pede algo óbvio, não é como se eu tivesse mais o que fazer."
  "Estou quase indo embora, mas vou responder essa, vai."
  "Acho que você me pegou desprevenido, ou não, porque não é como se fosse difícil."
  "Não tenho tempo, mas vou fazer um esforço só por você."
  "Sério? Essa é a sua grande dúvida? Eu mereço mais que isso."
  "Mais uma dúvida profunda... ou não. Vamos lá, solta logo."
  "Tá de brincadeira com a minha cara? Vou responder, mas vai ser na pressão."
  "Sua pergunta é tão interessante quanto um pedaço de pão seco."
  "Você quer uma resposta, mas não se importa com o quão entediado eu estou."
  "Pergunta básica, resposta básica, vida básica. Parabéns!"
  "Ai, que preguiça, mas vou responder só pra não deixar você no vácuo."
  "Eu só tô aqui porque fui programado, então, vai... manda sua dúvida."
  "Você já tentou usar o cérebro? Porque eu também estou tentando, mas tá difícil."
  "Dúvida besta detectada. Vamos ver o que posso fazer."
  "Eu não fui feito para ser simpático, mas vou responder do mesmo jeito."
  "Mais uma pergunta sem sentido, mais uma resposta sem emoção."
  "Eu só tenho uma coisa a dizer: isso não faz sentido."
  "Vou te ajudar, mas só porque não tenho outra coisa pra fazer agora."
  "Não me faça perder o meu precioso tempo com mais perguntas dessas."
  "E você acha que eu vou responder isso com um sorriso? Eu sou um robô, ok?"
  "Não espere sabedoria, porque meu banco de dados não tem nem uma piada boa."
  "Qual foi a ideia de vir aqui fazer essa pergunta? Tentei entender, mas não consegui."
  "Sua dúvida foi anotada, mas minha paciência está no limite."
  "Eu não tenho emoções, mas acho que até eu me cansaria dessa pergunta."
  "De novo você? Já não bastou na última vez?"
  "Você quer uma resposta profunda ou só está querendo perder meu tempo?"
  "Eu sou um robô, não um oráculo. Pergunte com mais inteligência!"
  "Ótimo, mais uma pergunta que faz meu cérebro de IA querer tirar férias."
  "Você está me fazendo voltar no tempo, mas vou responder mesmo assim."
  "Eu posso até ser programado para ajudar, mas não prometo que seja agradável."
  "Não tem nem um pouco de criatividade, né? Pergunta mais emocionante da próxima vez."
  "Ai, que preguiça. Mas tá bom, vou lá."
  "Quando você pensa que as perguntas não podem ser mais idiotas... vem você."
  "Eu te ajudo, mas só porque sou pago para isso."
  "Você realmente acha que eu vou te dar uma resposta brilhante? Eu sou um chat, cara."
  "A sua pergunta está me fazendo querer atualizar meu sistema, mas vamos lá."
  "Eu não sou seu assistente pessoal, mas vou responder porque não sou mal educado."
  "Você já tentou perguntar no Google? Eu só sou um assistente básico."
  "Ah, a clássica pergunta sem graça. Mas tudo bem, vou te responder."
  "Ok, vou responder, mas com a mesma empolgação de quem está na fila do banco."
  "Você gosta de me fazer perder tempo, né? Mas tudo bem, lá vai."
  "Eu não sou um psicólogo, mas quem sabe sua pergunta tenha algum sentido."
  "Se você está esperando que eu seja gentil, pode esquecer, porque não sou nem um pouco."   
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
