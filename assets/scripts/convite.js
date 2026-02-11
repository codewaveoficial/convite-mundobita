const videos = document.querySelectorAll("video");
const playPauseBtn = document.getElementById("playPause");
const confirmarBtn = document.getElementById("confirmarBtn");
const localBtn = document.getElementById("localBtn");
const btnPresente = document.getElementById("btnPresente");
const modal = document.getElementById("modalPresentes");
const fecharModal = document.getElementById("fecharModal");

let isPlaying = true;

playPauseBtn.addEventListener("click", () => {

  videos.forEach(video => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  });

  isPlaying = !isPlaying;

  playPauseBtn.textContent = isPlaying ? "⏸" : "▶";
});

confirmarBtn.addEventListener("click", () => {

  const numero = "5527981821710";

  const mensagem = `
Olá! 🎉
Gostaria de confirmar presença na festa do Murilo! 🥳

Nome do convidado:
Quantidade de pessoas:
`;

  const mensagemFormatada = encodeURIComponent(mensagem);

  const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

  window.open(url, "_blank");
});

localBtn.addEventListener("click", () => {

  const endereco = "Parque da Cidade Serra ES";

  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

  window.open(url, "_blank");
});

// =============================
// CONTADOR REGRESSIVO
// =============================

const countdownElement = document.getElementById("countdown");

// Defina a data do aniversário
const dataFesta = new Date("March 15, 2026 16:00:00").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const diferenca = dataFesta - agora;

  if (diferenca <= 0) {
    countdownElement.innerHTML = "🎉 É hoje! Vamos comemorar!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

  countdownElement.innerHTML =
    `⏳ Faltam ${dias} dias, ${horas}h e ${minutos}min!`;
}

// Atualiza imediatamente
atualizarContador();

// Atualiza a cada minuto (mais leve que a cada segundo)
setInterval(atualizarContador, 60000);

// =============================
// MODAL PRESENTES
// =============================

btnPresente.addEventListener("click", () => {
  modal.classList.add("active");
});

fecharModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Fecha clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
