// Theme Toggle - Simple and Reliable
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const toggleButtonMobile = document.getElementById('theme-toggle-mobile');
  const htmlBody = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme on page load
  if (savedTheme === 'dark') {
    htmlBody.classList.add('dark');
  } else if (savedTheme === 'light') {
    htmlBody.classList.remove('dark');
  } else {
    // Check system preference if no saved preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlBody.classList.add('dark');
    } else {
      htmlBody.classList.remove('dark');
    }
  }

  // Toggle theme on desktop button click
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      htmlBody.classList.toggle('dark');
      
      // Save the preference
      const isDark = htmlBody.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Toggle theme on mobile button click
  if (toggleButtonMobile) {
    toggleButtonMobile.addEventListener('click', function() {
      htmlBody.classList.toggle('dark');
      
      // Save the preference
      const isDark = htmlBody.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
