// Interactive Effects & Mobile Menu

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
  
  // Close mobile menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add('hidden');
    }
  });
  
  // Experience Cards Hover Effect
  const experienceCards = document.querySelectorAll('.experience-card');
  
  experienceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Download Button Hover Effect
  const downloadButtons = document.querySelectorAll('.download');

  downloadButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Contact Form Hover Effect (Neon Glow)
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('mouseover', () => {
      contactForm.style.boxShadow = '0 0 40px 15px rgba(0, 255, 255, 0.3)';
    });

    contactForm.addEventListener('mouseout', () => {
      contactForm.style.boxShadow = 'none';
    });
  }

  // Smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Navigation link color change on hover
  document.querySelectorAll('nav a.nav-link').forEach(link => {
    const isHome = link.getAttribute('href') === '#home';
    const originalColor = isHome ? 'var(--text-primary)' : 'var(--text-secondary)';
    
    link.addEventListener('mouseenter', () => {
      link.style.color = 'var(--accent-primary)';
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = originalColor;
    });
  });
});
