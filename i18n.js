document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('[data-setlang]');
  const langSections = document.querySelectorAll('.lang-section');
  const htmlTag = document.documentElement;

  // Ensure 'en' is the default fallback if memory is empty
  let currentLang = localStorage.getItem('envisage_lang');
  if (!currentLang) {
    currentLang = 'en';
  }

  function setLanguage(lang) {
    // 1. Update HTML language tag for fonts
    htmlTag.setAttribute('lang', lang);

    // 2. Show the correct language sections and hide others
    langSections.forEach(section => {
      // This checks for BOTH data-lang="en" AND id="section-en" 
      // preventing the blank page error across all files
      const sectionLang = section.getAttribute('data-lang') || section.id.replace('section-', '');

      if (sectionLang === lang) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    // 3. Highlight the correct button in the nav
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-setlang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Remember preference
    localStorage.setItem('envisage_lang', lang);
  }

  // Initialize the page on load
  setLanguage(currentLang);

  // Listen for button clicks
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-setlang');
      setLanguage(selectedLang);
    });
  });
});
