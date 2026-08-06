// ============================================================
// SCRIPT.JS
// Funções principais do site: menu mobile, botão "voltar ao topo"
// e atualização automática do ano no rodapé.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

  // ------------------------------------------------------------
  // 1) MENU HAMBÚRGUER (mobile)
  // Abre e fecha o menu de navegação em telas pequenas.
  // ------------------------------------------------------------
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("aberto");

      const aberto = nav.classList.contains("aberto");
      hamburger.setAttribute("aria-expanded", aberto);
      hamburger.classList.toggle("ativo", aberto);
    });

    // Fecha o menu automaticamente ao clicar em um link (mobile)
    const links = nav.querySelectorAll(".nav__link");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ------------------------------------------------------------
  // 2) BOTÃO "VOLTAR AO TOPO"
  // Aparece somente após o usuário rolar a página.
  // ------------------------------------------------------------
  const voltarTopo = document.getElementById("voltarTopo");

  if (voltarTopo) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        voltarTopo.classList.add("visivel");
      } else {
        voltarTopo.classList.remove("visivel");
      }
    });

    voltarTopo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ------------------------------------------------------------
  // 3) ANO AUTOMÁTICO NO RODAPÉ
  // Atualiza o "© [ano]" automaticamente, sem precisar editar todo ano.
  // ------------------------------------------------------------
  const anoSpan = document.getElementById("ano");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

});
