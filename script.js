const respostasNormais = [
  "Vai pesquisar no Google!",
  "Compra uma Barsa e vai estudar.",
  "Essa pergunta foi aprovada pelo Ministério da Perda de Tempo.",
  "Você realmente achou que eu ia responder isso?",
  "Só pode estar de sacanagem...",
  "Eu cobraria pra responder isso, mas ainda não aceito Pix.",
  "Sua dúvida é tão profunda quanto um pires.",
  "Volta duas casas e tenta de novo.",
  "Meu processador travou só de ler isso.",
  "Você acabou de desperdiçar 10 segundos da minha IA.",
  "Se eu tivesse olhos, estaria revirando eles agora."
];

const respostasOfendidas = [
  "Essa pergunta é tão ruim que ofendeu até o HTML.",
  "Você acha que eu sou palhaço? Responda você mesmo!",
  "Já pensou em manter isso só pra você?",
  "A inteligência aqui artificial sou eu, mas você tá competindo!"
];

function responder() {
  const pergunta = document.getElementById('pergunta').value.trim();
  const respostaDiv = document.getElementById('resposta');
  const perguntaTexto = document.getElementById('perguntaTexto');
  const som = document.getElementById('somResposta');
  const btn = document.getElementById('perguntarBtn');

  if (!pergunta) {
    respostaDiv.textContent = "Digite alguma coisa antes, gênio.";
    respostaDiv.className = "resposta visivel";
    return;
  }

  respostaDiv.className = "resposta visivel";
  respostaDiv.textContent = "Pensando";
  perguntaTexto.textContent = `Pergunta: ${pergunta}`;

  btn.classList.add("animando");

  let pontos = 0;
  const intervalo = setInterval(() => {
    respostaDiv.textContent = "Pensando" + ".".repeat(pontos % 4);
    pontos++;
  }, 400);

  setTimeout(() => {
    clearInterval(intervalo);
    btn.classList.remove("animando");
    const modoOfendido = Math.random() < 0.3;
    const respostaAleatoria = modoOfendido ?
      respostasOfendidas[Math.floor(Math.random() * respostasOfendidas.length)] :
      respostasNormais[Math.floor(Math.random() * respostasNormais.length)];

    respostaDiv.textContent = respostaAleatoria;
    som.play();
  }, 2000);
}

document.getElementById("whatsappBtn").onclick = function () {
  const pergunta = document.getElementById('pergunta').value;
  const resposta = document.getElementById('resposta').textContent;
  const texto = `Perguntei pro ChatOGPT: "${pergunta}"\nResposta: "${resposta}" 😂`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
};
