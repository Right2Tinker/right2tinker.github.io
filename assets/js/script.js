document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navContainer = document.getElementById('nav-container');

  mobileBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
  });

  // --- Modern Language Dropdown Logic ---
  const langDropdown = document.getElementById('lang-dropdown');
  const langBtn = langDropdown.querySelector('.lang-btn');
  const langMenuButtons = langDropdown.querySelectorAll('.lang-menu button');
  const currentLangLabel = document.getElementById('current-lang-label');
  
  // Toggle dropdown visibility
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
    langBtn.setAttribute('aria-expanded', !isExpanded);
    langDropdown.classList.toggle('open');
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Pre-select current language based on URL
  const currentPath = window.location.pathname;
  const langCodes = ['en', 'chs', 'cht', 'ja', 'fr', 'es'];
  
  for (let lang of langCodes) {
    if (currentPath.startsWith(`/${lang}/`)) {
      currentLangLabel.textContent = lang.toUpperCase();
      break;
    }
  }

  // Handle language selection click
  langMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLang = button.getAttribute('data-lang');
      
      if (selectedLang === 'en') {
        window.location.href = '/'; 
      } else {
        window.location.href = `/${selectedLang}/`;
      }
    });
  });
});