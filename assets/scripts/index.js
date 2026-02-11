document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const enterBtn = document.getElementById("enterBtn");
  const characters = document.querySelectorAll(".character");
  const content = document.querySelector(".entrada-content");

  /* Configuração inicial */
  music.volume = 0.3;

  // Esconde tudo para animação inicial
  characters.forEach(char => {
    char.style.opacity = 0;
    char.style.transform += " scale(0.8)";
  });

  content.style.opacity = 0;
  content.style.transform = "translateY(20px)";

  /* Primeira interação do usuário inicia a música */
  const startMusicOnce = () => {
    music.play().catch(() => {});
    document.removeEventListener("click", startMusicOnce);
    document.removeEventListener("touchstart", startMusicOnce);
  };

  document.addEventListener("click", startMusicOnce);
  document.addEventListener("touchstart", startMusicOnce);

  /* Animação de entrada */
  setTimeout(() => {
    characters.forEach((char, index) => {
      setTimeout(() => {
        char.style.transition = "all 0.8s ease";
        char.style.opacity = 1;
        char.style.transform = char.style.transform.replace("scale(0.8)", "scale(1)");
      }, index * 150);
    });

    content.style.transition = "all 0.8s ease";
    content.style.opacity = 1;
    content.style.transform = "translateY(0)";
  }, 300);

  /* Clique no botão */
  enterBtn.addEventListener("click", () => {
    // Feedback visual
    enterBtn.style.transform = "scale(0.9)";

    // Fade out geral
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "convite.html";
    }, 600);
  });
});
