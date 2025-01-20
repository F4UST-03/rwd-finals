const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = document.querySelectorAll('.section');
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    function showSection(sectionId) {
      sections.forEach(section => section.style.display = section.id === sectionId ? 'block' : 'none');
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === sectionId));
      mobileLinks.forEach(link => link.classList.toggle('active', link.dataset.section === sectionId));
    }

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.section);
      });
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.section);
        mobileMenu.classList.remove('active');
      });
    });

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    showSection('index');