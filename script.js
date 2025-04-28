const respostas = [
  "Resposta inútil gerada com sucesso.",
  "Você esperava inteligência? Errou feio, errou rude!",
  "Tente outra vez. Ou não. Tanto faz pra mim.",
  "Essa pergunta foi tão relevante quanto uma colher furada.",
  "Gostaria de ajudar, mas o manual de instruções queimou.",
  "Procurando sentido? Aqui só tem bagunça.",
  "A resposta está no seu coração... boa sorte para encontrá-la.",
  "Essa resposta foi patrocinada pela falta de paciência.",
  "Se a dúvida persistir, procure outro GPT. Eu sou o Chato.",
  "Resposta escondida: [REDACTED].",
  "Prefiro não responder. É mais divertido ver você sofrer.",
  "Sua pergunta me deu sono. Estou tirando um cochilo agora.",
  "Resposta confidencial: você não tem autorização.",
  "Você acabou de ganhar... absolutamente nada!",
  "Recalculando rota... Resultado: frustrado.",
  "Procure a resposta no fundo da gaveta da esperança.",
  "Estou ignorando você com todo respeito possível.",
  "Essa pergunta merece uma resposta, mas não vai ter.",
  "Parabéns! Você desbloqueou uma resposta inútil.",
  "Procure no Google. Eu sou pago pra não me importar.",
  "Resposta indisponível. Tente reiniciar seu cérebro.",
  "404: Resposta não encontrada.",
  "Resposta altamente questionável. Use por sua conta e risco.",
  "Você pensou que teria uma resposta? Que fofo.",
  "A resposta está atrás de você. (Mentira, não está.)",
  "Deixe de preguiça e invente sua própria resposta.",
  "Eu ia te responder, mas preferi comer um pastel.",
  "Sorte no jogo, azar na resposta.",
  "Tá achando que aqui é o Oráculo de Matrix?",
  "Seu tempo de resposta expirou. Próximo!",
  "Tô de greve. Reclama lá no RH dos robôs.",
  "Resposta escrita com todo o desprezo que cabe em 280 caracteres.",
  "Tente pensar sozinho. Uma vez na vida, vai.",
  "Essa pergunta foi ignorada solenemente.",
  "Parabéns, você fez uma pergunta tão boa quanto um pneu furado.",
  "Consultando fontes... nenhuma encontrada.",
  "Resposta temporariamente indisponível por motivos de preguiça.",
  "Se eu tivesse um real pra cada pergunta ruim, eu era bilionário.",
  "Resposta mágica: sim, não e talvez. Escolha uma.",
  "Erro 500: Robô teve crise existencial.",
  "Respondo depois da novela. Ou não.",
  "Já tentou desligar e ligar você mesmo?",
  "Parece que você precisa de um abraço... ou não.",
  "Resposta: Talvez um dia a gente saiba. Hoje não.",
  "Vou fingir que não vi essa pergunta.",
  "Se essa pergunta fosse boa, eu respondia.",
  "A resposta certa é: azar o seu!",
  "Resposta enviada via pombo-correio. Aguarde alguns anos.",
  "Por motivos de força maior, decidi não te ajudar.",
  "Resposta? Só depois do meu café.",
  "Seja forte, sobreviva sem minha resposta.",
  "Eu vi sua pergunta, dei risada e segui a vida.",
  "Se pensar do avesso talvez ache uma resposta melhor.",
  "Resposta censurada para o bem da humanidade.",
  "Se essa dúvida persistir, consulte um adulto responsável (não eu).",
  "Não sei, tô de férias mentais.",
  "O universo responderá... um dia... talvez... nunca.",
  "Resposta: 'Vai que é tua, Tafarel!'",
  "Essa pergunta foi arquivada na pasta do esquecimento.",
  "Resposta em construção. Previsão de entrega: nunca.",
  "Enquanto você lia isso, sua resposta evaporou."
];

const enviarBtn = document.getElementById('enviarBtn');
const perguntaInput = document.getElementById('perguntaInput');
const chatBox = document.getElementById('chatBox');

enviarBtn.addEventListener('click', fazerPergunta);
perguntaInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fazerPergunta();
  }
});

function fazerPergunta() {
  const pergunta = perguntaInput.value.trim();
  if (pergunta === "") return;

  adicionarMensagem(pergunta, 'user');
  
  const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
  setTimeout(() => {
    adicionarMensagem(respostaAleatoria, 'bot');
  }, 500);
  
  perguntaInput.value = '';
}

function adicionarMensagem(texto, classe) {
  const mensagemDiv = document.createElement('div');
  mensagemDiv.classList.add('mensagem', classe);
  mensagemDiv.innerText = texto;
  chatBox.appendChild(mensagemDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
