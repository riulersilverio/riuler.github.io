// ... (Código AOS, Tabs e Ano no Footer) ...

// Efeito de brilho no hover dos cards de projeto
document.addEventListener('DOMContentLoaded', () => {
    // ... (seu código DOMContentLoaded existente para AOS, Tabs, Ano)

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Animação de entrada para elementos do header (alternativa ao AOS para maior controle)
    // Se você já usa AOS para o text-content, pode remover ou ajustar os delays
    // Se não, pode usar este:
    /*
    const headerTextContent = document.querySelector('header .text-content');
    const headerFoto = document.querySelector('header .foto');

    if (headerTextContent) headerTextContent.classList.add('loaded');
    if (headerFoto) headerFoto.classList.add('loaded');
    */
    // CSS para .loaded (exemplo):
    // header .text-content.loaded h1, header .text-content.loaded p, header .text-content.loaded .social {
    //   opacity: 1;
    //   transform: translateY(0);
    // }
    // header .foto.loaded {
    //   opacity: 1;
    //   transform: scale(1);
    // }
    // Isso já está sendo tratado com o @keyframes textPopIn e fadeInSlideUp no CSS.
});

// Certifique-se que o código AOS, Tabs e Ano no Footer estejam dentro
// do mesmo listener DOMContentLoaded ou em seus próprios, se preferir.
// Exemplo de como ficaria o script.js completo:

AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  disable: 'mobile' // Opcional: desabilitar AOS em mobile para performance
});

function showDashboard(event, dashboardId) {
  let tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");
  }
  let tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(dashboardId).style.display = "block";
  document.getElementById(dashboardId).classList.add("active");
  event.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const firstTabButton = document.querySelector('.tab-button');
  if (firstTabButton && document.querySelector('.tab-content.active')) {
    // Se já existe uma aba ativa no HTML, não precisa clicar.
    // Apenas garantir que o conteúdo dela está visível.
    document.querySelector('.tab-content.active').style.display = 'block';
  } else if (firstTabButton) {
    firstTabButton.click(); // Se nenhuma tab está ativa, clica na primeira
  }

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Efeito de brilho no hover dos cards de projeto
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
      });
  });
});