const respostas = [
  "Nossa, que pergunta profunda... só que não!",
  "Pergunta melhor da próxima vez, tá?",
  "Vou fingir que entendi...",
  "Resposta gerada aleatoriamente para sua alegria!",
  "Erro 404: Paciência não encontrada.",
  "Chato GPT em modo turbo de enrolação!"
];

document.getElementById('gerarResposta').addEventListener('click', function() {
  const respostaEscolhida = respostas[Math.floor(Math.random() * respostas.length)];
  mostrarResposta(respostaEscolhida);
});

function mostrarResposta(resposta) {
  const respostaDiv = document.getElementById('resposta');
  respostaDiv.classList.remove('animacao-pular', 'animacao-girar', 'animacao-tremer');
  
  const animacoes = ['animacao-pular', 'animacao-girar', 'animacao-tremer'];
  const animacaoEscolhida = animacoes[Math.floor(Math.random() * animacoes.length)];
  
  respostaDiv.innerText = resposta;
  respostaDiv.classList.add(animacaoEscolhida);
}

function compartilharWhatsapp() {
  const url = "https://api.whatsapp.com/send?text=🤣%20Descobri%20o%20site%20mais%20chato%20e%20engraçado%20da%20internet%20-%20Chato%20GPT!%20Acesse:%20https://chato-gpt.github.io/chatogpt/";
  window.open(url, '_blank');

  setTimeout(() => {
    alert("Valeu por espalhar a vergonha alheia! 😂 Você é oficialmente cúmplice do Chato GPT.");
  }, 500);

  dispararFogos();
}

function dispararFogos() {
  const container = document.getElementById('fogos-container');
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-fogo');
    emoji.innerText = ['🎉', '😂', '🔥', '🤡'][Math.floor(Math.random() * 4)];
    
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = '100vh';

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 1000);
  }
}
