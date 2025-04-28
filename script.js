const respostas = [
  "Parabéns, você perguntou nada com coisa nenhuma!",
  "Resposta digna de um prêmio... de enrolação!",
  "Se fosse pra responder sério, eu seria pago, né?",
  "Respondi no astral: ninguém entendeu nada!",
  "Procure no Google, talvez lá tenha paciência.",
  "Chato GPT ativado: informação inútil gerada!",
  "Erro 404: Resposta não encontrada, tente chorando."
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
    alert("Valeu por espalhar vergonha gratuita! 😂 Chato GPT agradece.");
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
