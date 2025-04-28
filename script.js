const rudeResponses = [
    "Vai pesquisar no Google, preguiçoso!",
    "Compre uma Barsa e vá estudar!",
    "Nem sua mãe aguenta mais essas perguntas.",
    "Essa pergunta é tão ruim que me deu sono.",
    "Você tá de sacanagem comigo, né?",
    "Pede ajuda pro seu amigo imaginário.",
    "Não sei, não quero saber e tenho raiva de quem sabe.",
    "Leia um livro e me poupe, por favor.",
    "Tente novamente... mas desta vez usando o cérebro.",
    "Resposta indisponível. Cérebro do usuário não encontrado.",
    "Essa foi fácil demais... até pra você errar.",
    "Isso é uma pergunta ou um pedido de socorro?",
    "Ah não... outra dúvida inútil.",
    "Vai lavar uma louça que você ganha mais.",
    "Seus neurônios precisam de férias.",
    "Vou fingir que não li isso.",
    "Com essa pergunta, até a internet chora.",
    "Se valoriza, cidadão!",
    "Só rindo pra não chorar.",
    "Vai jogar Sudoku, pelo amor."
];

function generateRudeResponse() {
    const userInput = document.getElementById("userInput").value.trim();
    const responseDiv = document.getElementById("response");

    if (userInput === "") {
        responseDiv.innerText = "Quer que eu adivinhe o que você quer, é?";
        return;
    }

    responseDiv.innerText = "Digitando... 🤔";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * rudeResponses.length);
        const randomResponse = rudeResponses[randomIndex];
        responseDiv.innerText = randomResponse;
    }, 1200); // 1.2 segundos de espera
}
