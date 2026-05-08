// === CAROUSEL DE FONDO ===
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
  if (!slides.length) {
    return;
  }

  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Cambiar imagen cada 5 segundos (2s de transición + 3s de visualización)
if (slides.length) {
  setInterval(nextSlide, 5000);
}

// === MENU HAMBURGUESA ===
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// === ANIMACIONES DE SCROLL ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 70}ms`;
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('.reveal').forEach((section) => {
  observer.observe(section);
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.menu a').forEach((link) => {
  const href = link.getAttribute('href');

  if (href === currentPage) {
    link.classList.add('active');
  }
});

document.querySelectorAll('.top-bar').forEach((topBar) => {
  const existingShare = topBar.querySelector('.share-button');

  if (existingShare) {
    return;
  }

  const socialLink = topBar.querySelector('.social-link');
  const actions = document.createElement('div');
  actions.className = 'top-bar-actions';

  if (socialLink) {
    actions.appendChild(socialLink);
  }

  const shareButton = document.createElement('button');
  shareButton.type = 'button';
  shareButton.className = 'share-button';
  shareButton.textContent = 'Compartir pagina';

  shareButton.addEventListener('click', async () => {
    const shareUrl = window.location.href;
    const shareTitle = document.title;

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        shareButton.textContent = 'Enlace copiado';
        setTimeout(() => {
          shareButton.textContent = 'Compartir pagina';
        }, 1800);
      }
    } catch {
      shareButton.textContent = 'No compartido';
      setTimeout(() => {
        shareButton.textContent = 'Compartir pagina';
      }, 1800);
    }
  });

  actions.appendChild(shareButton);
  topBar.appendChild(actions);
});
