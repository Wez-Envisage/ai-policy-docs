document.addEventListener('DOMContentLoaded', () => {
  // Get all language switch buttons and all translatable sections
  const langButtons = document.querySelectorAll('[data-setlang]');
  const langSections = document.querySelectorAll('.lang-section');
  const htmlTag = document.documentElement;

  // Check if the user previously selected a language, default to English ('en')
  let currentLang = localStorage.getItem('envisage_lang') || 'en';

  function setLanguage(lang) {
    // 1. Update the HTML lang attribute (this triggers your CSS font changes)
    htmlTag.setAttribute('lang', lang);

    // 2. Show the correct language sections and hide the others
    langSections.forEach(section => {
      if (section.getAttribute('data-lang') === lang) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    // 3. Highlight the active button in the navigation
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-setlang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Save the user's choice to their browser so it remembers on the next page
    localStorage.setItem('envisage_lang', lang);
  }

  // Set the initial language when the page loads
  setLanguage(currentLang);

  // Listen for button clicks to change the language
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-setlang');
      setLanguage(selectedLang);
    });
  });
});
