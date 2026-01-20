// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = {
        name: this.querySelector('input[name="name"]').value,
        email: this.querySelector('input[name="email"]').value,
        message: this.querySelector('textarea[name="message"]').value
      };
      
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      try {
        // For now, just show a success message
        // In production, you would send this to a backend service
        alert(`Thank you, ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}`);
        
        // Reset form
        this.reset();
      } catch (error) {
        alert('Error sending message. Please try again.');
        console.error('Form submission error:', error);
      }
    });
  }
});
